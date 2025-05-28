DROP TABLE IF EXISTS cidades;
CREATE TABLE cidades (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    geom GEOMETRY(Point, 4326)
);

DROP TABLE IF EXISTS incidencias;
CREATE TABLE incidencias (
    id SERIAL PRIMARY KEY,
    lon FLOAT,
    lat FLOAT,
    anual INTEGER,
    jan INTEGER,
    fev INTEGER,
    mar INTEGER,
    abr INTEGER,
    mai INTEGER,
    jun INTEGER,
    jul INTEGER,
    ago INTEGER,
    set INTEGER,
    out INTEGER,
    nov INTEGER,
    dez INTEGER,
    geom GEOMETRY(Polygon, 4326)
);

