import { a } from "@react-spring/web";

interface Rectangulo {
  ancho: number;
  alto: number;
}

let rect: Rectangulo = {
  ancho: 2,
  alto: 3,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
