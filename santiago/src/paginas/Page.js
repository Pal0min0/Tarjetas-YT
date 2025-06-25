import React from "react";
import ListaTarjetas from "../Componentes/Lista";
import Saludo from "../Componentes/Saludo";
import Filtros from "../Componentes/Filtros";
import miku from '../img/miku.jpg';
import teto from '../img/teto.jpg';
import neru from '../img/neru.jpg';
import gumi from '../img/gumi.jpg';
import luka from '../img/luka.jpg';
import rin from '../img/rin.jpg';
import len from '../img/len.jpg';
import meiko from '../img/meiko.jpg';
import kaito from '../img/kaito.jpg';
import momo from '../img/momo.jpg';
import ia from '../img/ia.jpg';
import una from '../img/una.jpg';
import aoki from '../img/aoki.jpg';
import Botn from '../Componentes/button';

export default class Principal extends React.Component {
    state={
            filtro: "todos",
            data: [
                {
                    "id": 1,
                    "title": "Hatsune Miku",
                    "descrip": "Hatsune Miku es una cantante virtual japonesa creada con el software Vocaloid, famosa por su voz sintetizada y su imagen icónica de cabello azul.",
                    "img": miku,
                    "color": "turquoise",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/n9xeDxXE4Jc?si=wga9Y27TH6bicUoA",
                },
                {
                    "id": 2,
                    "title": "Kasane Teto",
                    "descrip": "Kasane Teto es una cantante virtual creada para UTAU, famosa por su voz única y su característico cabello rosa en espiral.",
                    "img": teto,
                    "color": "red",
                    "categoria": "utau",
                    "popular": true,
                    "video": "https://youtu.be/Soy4jGPHr3g?si=EOA35hIpb_HE1SgN",
                },
                {
                    "id": 3,
                    "title": "Akita Neru",
                    "descrip": "Akita Neru es una cantante virtual derivada del universo Vocaloid, reconocida por su actitud rebelde y su distintivo cabello rubio atado en una coleta.",
                    "img": neru,
                    "color": "yellow",
                    "categoria": "derivado",
                    "popular": false,
                    "video": "https://youtu.be/HqdUZ0kYWIA?si=21komgoWn71IE-JT",
                },
                {
                    "id": 4,
                    "title": "Megpoid Gumi",
                    "descrip": "Megpoid Gumi es una cantante virtual de Vocaloid con voz versátil y diseño icónico de cabello verde y gafas.",
                    "img": gumi,
                    "color": "green",
                    "categoria": "vocaloid",
                    "popular": false,
                    "video": "https://youtu.be/cQKGUgOfD8U?si=x0mCPrUahvJADzOA",
                },
                {
                    "id": 5,
                    "title": "Megurine Luka",
                    "descrip": "Megurine Luka es una cantante virtual de Vocaloid con voz madura y bilingüe (japonés e inglés), conocida por su cabello rosado y estilo elegante.",
                    "img": luka,
                    "color": "pink",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/ScSW9C3DF18?si=TrEFVB1vVOI5InYo",
                },
                 {
                    "id": 6,
                    "title": "Kagamine Rin",
                    "descrip": "Kagamine Rin es una cantante virtual japonesa de voz energética, reconocible por su lazo blanco y cabello rubio corto.",
                    "img": rin,
                    "color": "yellow",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/AqI97zHMoQw?si=kdrFoOWuGncGggmT",
                },
                {
                    "id": 7,
                    "title": "Kagamine Len",
                    "descrip": "Kagamine Len es un cantante virtual japonés con voz juvenil y cabello rubio, conocido por su dinamismo en dúo con Rin.",
                    "img": len,
                    "color": "yellow",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/Av04XfLtAcU?si=NdPmkVz9pu1X2aId",
                },
                {
                    "id": 8,
                    "title": "Meiko",
                    "descrip": "MEIKO es una cantante virtual japonesa de voz madura y poderosa, famosa por ser una de las primeras voces de Vocaloid.",
                    "img": meiko,
                    "color": "red",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/R8F8xpkffB8?si=9_-RwglS5rkfWiKg",
                },
                {
                    "id": 9,
                    "title": "Kaito",
                    "descrip": "KAITO es un cantante virtual japonés de voz suave y melódica, identificado por su bufanda azul y estilo clásico.",
                    "img": kaito,
                    "color": "blue",
                    "categoria": "vocaloid",
                    "popular": true,
                    "video": "https://youtu.be/fbLNqZQkhaI?si=KnfL8Dt9kARbxiJD",
                },
                {
                    "id": 10,
                    "title": "Momone Momo",
                    "descrip": "Momone Momo es una cantante virtual japonesa creada con UTAU, conocida por su voz suave y su apariencia de cabello rosado.",
                    "img": momo,
                    "color": "pink",
                    "categoria": "utau",
                    "popular": true,
                    "video": "https://youtu.be/iwNgQqZppJI?si=II2ItonMP-ORv0Kh",
                },
                {
                    "id": 11,
                    "title": "IA",
                    "descrip": "IA es una cantante virtual japonesa basada en Vocaloid, destacada por su voz etérea y su característico cabello blanco rosado.",
                    "img": ia,
                    "color": "white",
                    "categoria": "derivado",
                    "popular": false,
                    "video": "https://youtu.be/ymZpGeoSSIs?si=2xaKf0o1Nrrfv1YK",
                },
                {
                    "id": 12,
                    "title": "Otomachi Una",
                    "descrip": "Otomachi Una es una cantante virtual japonesa desarrollada para Vocaloid y CeVIO, reconocida por su voz aguda y enérgica, y su diseño inspirado en temática marina.",
                    "img": una,
                    "color": "blue",
                    "categoria": "derivado",
                    "popular": false,
                    "video": "https://youtu.be/prSuxqZR2s8?si=UUsvNkNoWqd34_4G",
                },
                {
                    "id": 13,
                    "title": "Aoki Lapiz",
                    "descrip": "Aoki Lapis es una cantante virtual japonesa de Vocaloid, conocida por su voz suave y cristalina, y su apariencia mágica con cabello azul celeste.",
                    "img": aoki,
                    "color": "purple",
                    "categoria": "derivado",
                    "popular": false,
                    "video": "https://youtu.be/PN-fEd6lCk0?si=SNTHyHmzg8UQ4FF7",
                }
            ],
            }

   

    cambiarFiltro = (nuevoFiltro) => {
        this.setState({ filtro: nuevoFiltro });
    };

    render() {
    const { data, filtro } = this.state;

    const filtrados = data.filter((p) => {
      if (filtro === "todos") return true;
      if (filtro === "populares") return p.popular;
      return p.categoria === filtro;
    });

    return (
      <div>
        <Saludo name="voice's" />
        <Filtros cambiarFiltro={this.cambiarFiltro} />
        <ListaTarjetas personajes={filtrados} />
        <Botn/>
      </div>
    );
}
}