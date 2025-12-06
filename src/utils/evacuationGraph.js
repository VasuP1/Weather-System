// src/utils/evacuationGraph.js

// Simple directed weighted graph of locations and travel times (in minutes)
const graph = {
  "Coastal City": [
    { to: "Inland Town A", time: 45 },
    { to: "Inland Town B", time: 60 },
  ],
  "Inland Town A": [
    { to: "Regional Shelter", time: 30 },
    { to: "Inland Town B", time: 20 },
  ],
  "Inland Town B": [
    { to: "Regional Shelter", time: 25 },
  ],
  "Regional Shelter": [],
};

/**
 * Dijkstra's algorithm for shortest path by time.
 * Returns { distance, path } from start to end.
 * Time complexity: O(V^2) for this simple implementation.
 */
export const findShortestEvacuationRoute = (start, end) => {
  const nodes = Object.keys(graph);
  const dist = {};
  const prev = {};
  const visited = {};

  nodes.forEach(node => {
    dist[node] = Infinity;
    prev[node] = null;
    visited[node] = false;
  });

  dist[start] = 0;

  for (let i = 0; i < nodes.length; i++) {
    // Pick the unvisited node with the smallest distance
    let u = null;
    let best = Infinity;

    for (const node of nodes) {
      if (!visited[node] && dist[node] < best) {
        best = dist[node];
        u = node;
      }
    }

    if (u === null) break;
    if (u === end) break;

    visited[u] = true;

    for (const edge of graph[u]) {
      const v = edge.to;
      const alt = dist[u] + edge.time;
      if (alt < dist[v]) {
        dist[v] = alt;
        prev[v] = u;
      }
    }
  }

  if (dist[end] === Infinity) {
    return { distance: Infinity, path: [] };
  }

  // Reconstruct path
  const path = [];
  let cur = end;
  while (cur !== null) {
    path.unshift(cur);
    cur = prev[cur];
  }

  return { distance: dist[end], path };
};

export const getAllLocations = () => Object.keys(graph);
