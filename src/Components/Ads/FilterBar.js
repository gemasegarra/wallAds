/*TO DO*/


/* Filtrado de anuncios
Puedes incluir filtros en la URL añadiendo parametros especiales a la consulta. Para comenzar con el filtrado incorpora el carácter ? seguido de las queries a incorporar
en el siguiente formato <query>=<value>. Si necesitas encadenar varias consultas puedes utilizar el carácter &.

Ejemplos de consultas:

Todos los anuncios que contienen el tag lifestyle: http://34.89.93.186:8080/apiv1/anuncios?tag=lifestyle:
Todos los anuncios con price entre 1 y 100: http://34.89.93.186:8080/apiv1/anuncios?price=1-100
Las dos consultas anteriores combinadas: http://34.89.93.186:8080/apiv1/anuncios?tag=lifestyle&price=1-100
Precio entre 1 y 100 de anuncios que empiecen por ‘Com’: http://34.89.93.186:8080/apiv1/anuncios?price=1-100&name=Com
Sólo los anuncios de venta: http://34.89.93.186:8080/apiv1/anuncios?venta=true
Sólo los anuncios de compra: http://34.89.93.186:8080/apiv1/anuncios?venta=false
Los parámetros disponibles para filtrado son:

name: filtrado por los que empiecen con el string indicado (la API NO es case sensitive).
price: filtrar por precio. Entre un rango x-y, menores a un precio x-, o mayores a un precio -y.
tag: permite filtrar los anuncios que tengan el tag indicado.
venta: permite filtrar por anuncios de venta (=true), o anuncios de compra (=false)
skip: permite saltar resultados (utilizado para paginar junto con limit)
limit: permite limitar el número de resultados devueltos
fields: campos a mostrar del anuncio
*/