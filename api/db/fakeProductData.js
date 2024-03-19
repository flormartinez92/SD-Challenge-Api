let productData = [
  {
    name: "Malbec Argentino",
    description:
      "El Catena Zapata Malbec Argentino Catena presenta un profundo e intenso color violeta. Su aroma remite a cassis, moca, clavo de olor y marcadas notas terrosas. En boca combina densidad y dulzor con atractivos dejos minerales, suaves notas de tabaco, frutos negros y especias. El final es largo y persistente, con sabores a frutos negros.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/69/thumb_68368_default_big.jpeg",
    price: 86240,
    brandId: "1",
  },
  {
    name: "Angelica Zapata Cabernet Franc",
    description:
      "El Angélica Zapata Cabernet Franc Alta, presenta un color rojo rubí con suaves tonalidades violáceas. Posee aroma intenso y concentrado con notas de cassis, grosellas maduras, y toques de vainilla y especias dulces como pimienta negra y clavo de olor. De impacto dulce y excelente estructura en boca, muestra frutos rojos maduros con marcados dejos a eucalipto y pimienta negra. Este vino, de excelente balance y elegancia, posee ahora un final bien estructurado y persistente y se prevé que evolucionará favorablemente en botella hasta por lo menos el año 2021.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59782_default_big.jpeg",
    price: 22790,
    brandId: "1",
  },
  {
    name: "Angelica Zapata Chardonnay",
    description:
      "Angélica Chardonnay es un single vineyard que refleja características propias de la zona de gran altitud en donde se origina. Con días soleados y cálidos, y noches frescas al pie del Cordón del Plata, las uvas de Chardonnay adquieren una madurez plena y bien balanceada. Su color es amarillo intenso con reflejos verdosos claros. En nariz se presenta concentrado e intenso, con aromas de frutas cítricas y un toque mineral. En boca, de impacto dulce, untuoso, es brillante y fresco con sabores a frutas maduras, notas de vainilla y una excelente acidez natural que le otorga un final largo y persistente.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53059_default_big.jpeg",
    price: 24338,
    brandId: "1",
  },
  {
    name: "DV Catena Cabernet Malbec",
    description:
      "DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas. A la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble. En boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52791_default_big.jpeg",
    price: 11524,
    brandId: "1",
  },
  {
    name: "El Enemigo Cabernet Franc",
    description:
      "Este Cabernet Franc es de color rojo rubí con tonos violetas suaves. En nariz, aromas intensos y notas concentradas de cassis, grosellas maduras y especias dulces que incluyen la pimienta negro. Su paso por roble ofrece notas integradas de cedro y vainilla. Impacto fresco y excelente estructura en boca, que recuerda a frutos rojos maduros con notas de eucalipto y pimienta negra. Este vino tiene un excelente equilibrio y elegancia con un final persistente bien estructurado.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53362_default_big.jpeg",
    price: 20382,
    brandId: "2",
  },
  {
    name: "Gran Enemigo Chacayes SV Cabernet Franc",
    description:
      "Algo salvaje en sus aromas, pero equilibrado, este Gran Enemigo muestra una cara diferente de esta cepa.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60527_default_big.jpeg",
    price: 39960,
    brandId: "2",
  },
  {
    name: "Gran Enemigo Blend",
    description:
      "En vista un púrpura profundo con reflejos rubí. En nariz dulce, fruta en compota y notas de chocolate y vainilla. En boca ataca dulce, algo astringente, de gran cuerpo y marcada acidez.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53453_default_big.jpeg",
    price: 38184,
    brandId: "2",
  },
  {
    name: "Lindaflor La Violeta Malbec",
    description:
      "Vista: De color rojo brillante intenso, con tonalidades y reflejos púrpura. Nariz: Sus aromas son complejos, de frutos de ciruela y regaliz muy maduros, pimienta negra y sutiles notas de nuez moscada. Boca: Tiene cuerpo redondo, bien estructurado y armonioso. Sobresaliente fineza en su final largo en boca.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55200_default_big.jpeg",
    price: 12100,
    brandId: "3",
  },
  {
    name: "Petite Fleur Chardonnay",
    description:
      "De color amarillo cristalino y brillante. Su aroma remite a notas de frutas blancas de carozo. En boca posee buena acidez, se perciben sabores frutados. Es un vino fresco y elegante. Ideal como aperitivo. Se recomienda para acompañar pastas y ensaladas.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61699_default_big.jpeg",
    price: 18100,
    brandId: "3",
  },
  {
    name: "Petite Fleur Torrontés",
    description: "Un vino fresco, floral y con notas cítricas.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55208_default_big.jpeg",
    price: 17900,
    brandId: "3",
  },
  {
    name: "Henry Gran Guarda Nº 1 Blend",
    description:
      "Color rojo con reflejos levemente violáceos. Aroma complejo, a mermeladas, pimienta y otras especias, ahumados y cuero. Entrada en boca suave, buena acidez que armoniza con la marcada presencia de los taninos en el prolongado final.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53909_default_big.jpeg",
    price: 146900,
    brandId: "4",
  },
  {
    name: "Lagarde Blend de Tintas",
    description:
      "Color: Rojo violáceo intenso y brillante. Nariz: Frutas rojas y negras maduras con notas de hierbas y algunas especias. Boca: Entrada en boca amable. Concentración media, taninos maduros y envolventes, jugoso y buena acidez.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/65/thumb_64507_default_big.jpeg",
    price: 9000,
    brandId: "4",
  },
  {
    name: "Henry Pure Malbec",
    description:
      "COLOR: Color rojo casi negro con tintes violáceos. AROMA: Aroma a fruta roja fresca y algunas notas mentoladas, coco, vainilla y especias del aporte del roble bien amalgamado. SABOR: Entrada suave aterciopelada. Tiene muy buena untuosidad pero no empalaga. Es jugoso y largo. La sensación perdura por un tiempo prolongado.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59850_default_big.jpeg",
    price: 9000,
    brandId: "4",
  },
  {
    name: "Lagarde Goes Pink Rosé",
    description:
      "COLOR: De color rosado, con reflejos rubí. AROMA: Aromas delicados y frescos. Hay notas de frutos como la guinda, la cereza y la frambuesa. SABOR: La cosecha 2017 es la culminación de nuestra historia siendo un ejemplo de un vino puro, fresco balanceado perfecto para maridar con verano, amigos y el mar.",
    imageUrl:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59304_default_big.jpeg",
    price: 9009,
    brandId: "4",
  },
];

module.exports = productData;
