function dijkstra(grafo, começo, fim) {
    const n = grafo.length; // obtem o numero total de vertices no grafo
    const distancia = new Array(n).fill(Infinity);
    distancia[começo] = 0;
    const visitado = new Array(n).fill(false);// cria uma array para rastrear quais vertices ja foram visitados

    for (let i = 0; i < n; i++) {
        const u = minDistance(distancia, visitado);
        visitado[u] = true;

        for (const { node, weight } of grafo[u]) {
            if (!visitado[node] && distancia[u] + weight < distancia[node]) {
                distancia[node] = distancia[u] + weight;
            }
        }
    }
    return distancia[fim];
}

function minDistance(distancia, visitado) {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < distancia.length; v++) {
        if (!visitado[v] && distancia[v] < min) {
            min = distancia[v];
            minIndex = v;
        }
    }
    return minIndex;
}

// Lista adjacente com vertice ponderado node = vertice, weigth = peso
const grafo = [
    [{ node: 1, weight: 2 }, { node: 2, weight: 1 }], // Vértice 0
    [{ node: 0, weight: 2 }, { node: 2, weight: 1 }, { node: 3, weight: 3 }], // Vértice 1
    [{ node: 0, weight: 1 }, { node: 1, weight: 1 }, { node: 3, weight: 2 }, { node: 4, weight: 4 }], // Vértice 2
    [{ node: 1, weight: 3 }, { node: 2, weight: 2 }, { node: 4, weight: 1 }], // Vértice 3
    [{ node: 2, weight: 4 }, { node: 3, weight: 1 }] // Vértice 4
];

const começo = 0;
const fim = 4;
console.log(dijkstra(grafo, começo, fim)); // Saída esperada: 4