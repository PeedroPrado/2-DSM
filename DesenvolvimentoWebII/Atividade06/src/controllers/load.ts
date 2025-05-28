import pool from "./db";
import * as fs from "fs";
import * as path from "path";

interface GeoJSONFeature {
  type: string;
  properties: { [key: string]: any };
  geometry: { [key: string]: any };
}

interface GeoJSON {
  type: string;
  features: GeoJSONFeature[];
}

async function importGeoJSONCidades(filePath: string, tableName: string) {
  try {
    const geojsonData: GeoJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    console.log(
      `Iniciando importação de ${geojsonData.features.length} registros para a tabela ${tableName}.`
    );

    // Limpa a tabela antes de inserir novos dados
    await pool.query(`TRUNCATE TABLE ${tableName} CASCADE;`);

    for (const feature of geojsonData.features) {
      const nome = feature.properties.nome || "";
      const geom = JSON.stringify(feature.geometry);

      const insertQuery = `
        INSERT INTO ${tableName} (nome, geom)
        VALUES ($1, ST_SetSRID(ST_GeomFromGeoJSON($2), 4326))
      `;

      await pool.query(insertQuery, [nome, geom]);
    }

    console.log(`Importação concluída com sucesso na tabela ${tableName}.`);
  } catch (error) {
    console.error("Erro na importação:", error);
  }
}

async function importGeoJSONIncidencias(filePath: string, tableName: string) {
  try {
    const geojsonData: GeoJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    console.log(
      `Iniciando importação de ${geojsonData.features.length} registros para a tabela ${tableName}.`
    );

    // Limpa a tabela antes de inserir novos dados
    await pool.query(`TRUNCATE TABLE ${tableName} CASCADE;`);

    for (const feature of geojsonData.features) {
      const lon = feature.properties.lon || 0;
      const lat = feature.properties.lat || 0;
      const anual = feature.properties.anual || 0;
      const jan = feature.properties.jan || 0;
      const fev = feature.properties.fev || 0;
      const mar = feature.properties.mar || 0;
      const abr = feature.properties.abr || 0;
      const mai = feature.properties.mai || 0;
      const jun = feature.properties.jun || 0;
      const jul = feature.properties.jul || 0;
      const ago = feature.properties.ago || 0;
      const set = feature.properties.set || 0;
      const out = feature.properties.out || 0;
      const nov = feature.properties.nov || 0;
      const dez = feature.properties.dez || 0;
      const geom = JSON.stringify(feature.geometry);

      const insertQuery = `
        INSERT INTO ${tableName} (lon, lat, anual, jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez, geom)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, ST_SetSRID(ST_GeomFromGeoJSON($16), 4326))
      `;

      await pool.query(insertQuery, [
        lon,
        lat,
        anual,
        jan,
        fev,
        mar,
        abr,
        mai,
        jun,
        jul,
        ago,
        set,
        out,
        nov,
        dez,
        geom,
      ]);
    }

    console.log(`Importação concluída com sucesso na tabela ${tableName}.`);
  } catch (error) {
    console.error("Erro na importação:", error);
  }
}

// Caminho para o arquivo GeoJSON
const filePathCidades = path.join(__dirname, "../../data/", "cidade.geojson");
// Executa a função
importGeoJSONCidades(filePathCidades, "cidades");

// Caminho para o arquivo GeoJSON
const filePathIncidencias = path.join(
  __dirname,
  "../../data/",
  "global_horizontal_means.geojson"
);
// Executa a função
importGeoJSONIncidencias(filePathIncidencias, "incidencias");
