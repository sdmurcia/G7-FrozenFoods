use frozenf_db;

insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Wok de vegetales', 'Arroz con  mix de vegetales con jengibre, ajo y salsa de soya.', 5, 'wok-vege.jpg', 2, 2, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('10 Albondigas', 'Carne de res molida especial, miga de pan, huevo , sal, albahaca y salsa napòlitana.', 4, 'albondigas.jpg', 2, 3, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Alitas', 'Alitas de pollo marinadas con paprika, miel, mostaza, comino y sal.', 3, 'alitas.jpg', 5, 3, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Lasaña de pollo', 'Pechuga desmechada, tomates seleccionados, cebolla, pesto, hiervas aromatizantes.', 4, 'lasaña-pollo.jpg', 10, 1, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Goulash', 'Carne de res en cubos marinada con finas hierbas , zanahoria , cocido en sus jugos a temperatura controlada.', 3, 'goulash.jpg', 0, 3, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Vegetales a la plancha', 'Vegetales dorados a la plancha con: cebolla, zuchini verde, zuchini amarillo, berenjena, sal, pimenton ahumado, aceite de oliva y albaca.', 2, 'vegetales.jpg', 5, 4, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Vegetales blanqueados', 'Mezcla de vegetales, brocoli, coliflor, zanahoria y habichuela al vapor con aceite de oliva y sal.', 2, 'vege-blanc.jpg', 10, 4, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Lasaña vegetariana', 'Berenjenas, zuchinni verde y amarillo, pimentón ahumado, zanahoria, albahaca, salsa napolitana, queso mozarella y pasta.', 3, 'lasaña-vege.jpg', 10, 4, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Sopa de lentejas al coco', 'Lentejas rojas, cebolla, ajo, jengibre, curry en polvo, callen, leche de coco, fondo de verduras, coco rayado, tomate en trozos ,espinaca y sal.', 2.5, 'lentejas-coco.jpg', 0, 5, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Carne de res desmechada', 'Carne de res mechada con hogao criollo.', 2.5, 'desmechada.jpg', 0, 3, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Pollo al curry', 'Pechuga de pollo con: cebolla cabezona, genjibre, ajo, curry amarillo en polvo, tomate y leche de coco.', 4, 'pollo-curry.jpg', 10, 3, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Pure de papa', 'Pure de papa sabanera, mantequilla, leche y sal.', 1.5, 'pure-papa.jpg', 0, 1, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Vegetales al wok', 'Mix de Vegetales ,zanahoria,zuchini verde,zuchini amarillo, cebolla, salteados al wok con genjibre ajo y salsa soya', 3.5, 'wok-vege.jpg', 0, 4, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Arroz con coco', 'Arroz con titote de coco.', 2.5, 'arroz-coco.jpg', 0, 2, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Calentao', 'Arroz, carne de cerdo,platano maduro,frijol, hogao, pollo, chorizo, cilantro.', 4, 'calentao.jpg', 5, 2, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('WOK de Cerdo', 'Arroz al wok con cerdo y mix de vegetales con jengibre, ajo y salsa de soya.', 4.5, 'wok-cerdo.jpg', 10, 2, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('WOK de pollo', 'Arroz al wok con pollo y mix de vegetales con jengibre, ajo y salsa de soya.', 4.5, 'wok-pollo.jpg', 0, 2, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Callos a la Madrileña', 'Menudo, pezuña de cerdo, chorizo, garbanzos, pimenton, tomate, cebolla, perejil, chocolate y salsas de tomate.', 3.5, 'callos-madri.jpg', 0, 3, 'No' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Lomo stroganoff', 'Julianas de lomo de res con champiñones en suave salsa de carne y crema de leche.', 4.5, 'stroganoff.jpg', 5, 3, 'Si' );
insert into productos
(producto, descripcion, precio, image, descuento, Idcategoria, visitados)
values ('Salmon grille', 'Lomo de Salmòn noruego, sal , pimienta y salsa de la casa.', 5, 'salmon.jpg', 10, 3, 'Si' );


insert into categorias
(categoria)
values ('acompañamientos');
insert into categorias
(categoria)
values ('arroces');
insert into categorias
(categoria)
values ('carnes');
insert into categorias
(categoria)
values ('vegetarianos');
insert into categorias
(categoria)
values ('sopas');
insert into categorias
(categoria)
values ('postres');
