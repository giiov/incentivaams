// VARIÁVEIS GLOBAIS 
let mapa; //google maps
let geocoder; // para converter o endereço
let directionsService; //calcula rotas
let directionsRenderer; //desenha rotas no mapa
const marcadores = []; //lista de marcadores criados (unidade, infowindow, marker)


let marcadorDestaque = null; //indica a unidade mais proxima
let marcadorOrigem = null;
let iconUnidade, etecProxima, iconOrigem;


//FUNÇÃO inicializarMapa()
//inicializando e chamando a api
function inicializarMapa() {
  //cria o mapa e o zoom inicial
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.5505, lng: -46.6333 },
    zoom: 11,
  });

  //serviços do google
  geocoder = new google.maps.Geocoder();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true //desenhar marcadores
  });
  directionsRenderer.setMap(mapa);

  iconUnidade = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    fillColor: "rgb(185, 0, 28)",
    fillOpacity: 1,
    strokeWeight: 3,
    strokeColor: "#fff",
    scale: 1.5,
    anchor: new google.maps.Point(12, 22),
  };

  etecProxima = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    fillColor: "#800115",
    fillOpacity: 1,
    strokeWeight: 3,
    strokeColor: "#fff",
    scale: 1.8,
    anchor: new google.maps.Point(12, 22),
  };

  iconOrigem = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "#800115",
    fillOpacity: 1,
    strokeWeight: 3,
    strokeColor: "#fff",
    scale: 6,
  };

  //conecta o botão de busca pelo id
  const btn = document.getElementById("btn-buscar");
  const input = document.getElementById("endereço");
  btn.addEventListener("click", () => {
    const query = input.value.trim();
    if (!query) {
      alert("Digite um CEP ou endereço para buscar! ");
      return;
    }

    if (marcadorDestaque) {
      marcadorDestaque.setMap(null);
      marcadorDestaque = null;
    }

    // Remove marcador de origem anterior
    if (marcadorOrigem) {
      marcadorOrigem.setMap(null);
      marcadorOrigem = null;
    }

    // Reseta todos os ícones das unidades para o padrão
    for (const m of marcadores) {
      m.marker.setIcon(iconUnidade);
    }

    buscarMaisProxima(query);
  });

  //carrega as unidados do json
  carregarUnidades();
}

//FUNÇÃO carregarUnidades()
//busca o unidades.json
//usa cache localStorage para lat/lng (para evitar requests do geocoding)
//cria marcadores no mapa para cada unidade
async function carregarUnidades() {
  try {
    const res = await fetch("./src/componentes/MAPS/unidades.json");
    if (!res.ok) throw new Error("Falha ao carregar unidades.json");
    const json = await res.json();
    const unidades = json.unidades || [];

    let cache = {};
    try {
      cache = JSON.parse(localStorage.getItem("unidades_cache") || "{}");
    } catch (e) {
      cache = {};
    }

    // usar coordenadas ja existentes para cada unidade, caso não tenha, geocodificar
    for (const u of unidades) {
      // criar uma chave segura para cache: id > nome > endereco
      const cacheKey = (u.id ?? u.nome ?? u.endereco).toString();

      if (cache[cacheKey]) {
        u.lat = cache[cacheKey].lat;
        u.lng = cache[cacheKey].lng;
        criarMarcadorParaUnidade(u);
      } else {
        const coords = await geocodificarEndereco(u.endereco);
        if (coords) {
          u.lat = coords.lat;
          u.lng = coords.lng;
          cache[cacheKey] = { lat: coords.lat, lng: coords.lng };
          localStorage.setItem("unidades_cache", JSON.stringify(cache));
          criarMarcadorParaUnidade(u);
        } else {
          console.warn("Não foi possível geocodificar:", u.nome, u.endereco);
        }
      }
    }

    console.log(` Unidades carregadas: ${unidades.length}`);
  } catch (err) {
    console.error("Erro ao carregar unidades:", err);
    alert("Erro ao carregar unidades. Veja detalhes.");
  }
}

//FUNÇÃO geocodificarEndereco(endereco)
//vai retornar lat, lng ou null

function geocodificarEndereco(endereco) {
  return new Promise((resolve) => {
    geocoder.geocode({ address: endereco }, (results, status) => {
      if (status === "OK" && results[0]) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        resolve({ lat, lng });
      } else {
        console.warn(`Geocoding falhou para "${endereco}" (status: ${status})`);
        resolve(null);
      }
    });
  });
}

function criarMarcadorParaUnidade(unidade) {
  //posição por numeros
  const pos = { lat: Number(unidade.lat), lng: Number(unidade.lng) };

  const marker = new google.maps.Marker({
    position: pos,
    map: mapa,
    title: unidade.nome,
    icon: iconUnidade
  });

  const infoWindow = new google.maps.InfoWindow({
    content:
      `<div style="min-width:180px">
      <strong>${unidade.nome}</strong><br/>
      ${unidade.endereco}<br/>
      CEP: ${unidade.cep || "N/D"}
      </div>`
  });

  //quando clicar no marcador, abrir o infowindow (e fechar o anterior caso tenha)
  marker.addListener("click", () => {
    for (const m of marcadores) m.infoWindow.close();
    infoWindow.open(mapa, marker);
  });
  // Armazena a relação 1:1 entre unidade, marker e infowindow
  marcadores.push({ unidade, marker, infoWindow });
}

//FUNÇÃO buscarMaisProxima(query)
//geocodifia cep do usuario
//calcula a distancia até todas as unidades com coordenadas
//escolhe a menor e chama a rota
function buscarMaisProxima(query) {
  geocoder.geocode({ address: query }, (results, status) => {
    if (status !== "OK" || !results[0]) {
      alert("Endereço/CEP não encontrado. Tente outro texto.");
      console.error("Geocode falhou:", status);
      return;
    }

    const origemLatLng = results[0].geometry.location;
    const origem = { lat: origemLatLng.lat(), lng: origemLatLng.lng() };

    //centraliza a busca no locl do usuário
    mapa.setCenter(origem);
    mapa.setZoom(16);

    //calcula a distancia para todas as unidades quetem coordenada
    const distancias = [];
    for (const item of marcadores) {
      const u = item.unidade;
      if (u.lat == null || u.lng == null) continue //ignora as sem coordenada
      const d = haversineDistance(origem.lat, origem.lng, Number(u.lat), Number(u.lng));
      distancias.push({
        unidade: u,
        distKm: d,
        lat: Number(u.lat),
        lng: Number(u.lng),
        markerObj: item
      });
    }

    if (distancias.length === 0) {
      alert("nenhuma unidade com coordenadas disponivel");
      return;
    }

    //ordena e pega a mais proxima
    distancias.sort((a, b) => a.distKm - b.distKm);
    const maisProxima = distancias[0];
    console.log(`Unidade mais próxima: ${maisProxima.unidade.nome} — ${maisProxima.distKm.toFixed(2)} km`);

    destacarUnidadeETraçarRota(origem, maisProxima);

  });

}

//FUNÇÃO destacarUnidadeETraçarRota(origem, obj) 
//coloca o marcador de destaque
//abre o infowindow e traça rota
function destacarUnidadeETraçarRota(origem, obj) {
  const unidade = obj.unidade;
  const destino = { lat: obj.lat, lng: obj.lng };

  if (marcadorOrigem) marcadorOrigem.setMap(null);

  if (marcadorDestaque) {
    marcadorDestaque.setMap(null);
    marcadorDestaque = null;
  }

  if (marcadorOrigem) {
    marcadorOrigem.setMap(null);
    marcadorOrigem = null;
  }

  marcadorOrigem = new google.maps.Marker({
    position: origem,
    map: mapa,
    title: "endereço",
    icon: iconOrigem
  });

  for (const m of marcadores) m.marker.setIcon(iconUnidade);

  //cria o marcador de destaque no destino
  marcadorDestaque = new google.maps.Marker({
    position: destino,
    map: mapa,
    title: unidade.nome,
    icon: etecProxima
  });

  //reseta os ícones para os marcadores padrões
  for (const m of marcadores) {
    m.marker.setIcon(iconUnidade);
  }

  //muda o ícone
  obj.markerObj.marker.setIcon(etecProxima);
  marcadorDestaque = obj.markerObj.marker;


  //info window de destaque com link para o google maps
  const infoHtml =
    `<div style="min-width:220px">
    <strong>${unidade.nome}</strong><br/>
    ${unidade.endereco}<br/>
    CEP: ${unidade.cep || "N/D"}<br/>
     <div style="margin-top:6px">
         <a target="_blank" href="${mapsDirectionsUrl(origem, destino)}">Abrir no Google Maps</a>
       </div>
     </div>`;

  const infoWindow = new google.maps.InfoWindow({ content: infoHtml });

  //vai abrir apenas a infowindow de destaque
  for (const m of marcadores) m.infoWindow.close();
  infoWindow.open(mapa, marcadorDestaque);

  //ajusta o zoom do apa na unidade
  mapa.setCenter(destino);
  mapa.setZoom(16);

  //traçar rota com directionsService
  directionsService.route({
    origin: { lat: origem.lat, lng: origem.lng },
    destination: { lat: destino.lat, lng: destino.lng },
    travelMode: google.maps.TravelMode.DRIVING
  }, (response, status) => {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    } else {
      console.error("Directions request failed due to " + status);
      alert("Não foi possível traçar a rota automaticamente. Mas é possível acessar no google Maps.");
    }
  });
}

//FUNÇÃO mapsDirectionsUrl(ori,des)
//cria link para abrir rota no google maps
function mapsDirectionsUrl(origem, destino) {
  const ori = `${origem.lat},${origem.lng}`;
  const des = `${destino.lat},${destino.lng}`;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(ori)}&destination=${encodeURIComponent(des)}&travelmode=driving`;
}

//FUNÇÃO haversineDistance(lat1,lng1,lat2,lng2)
//calcula distancia em km entre dois pontos

function haversineDistance(lat1, lng1, lat2, lng2) {
  const raio = 6371; //raio da terra em km
  const toRad = deg => deg * (Math.PI / 180);
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return raio * c;
}