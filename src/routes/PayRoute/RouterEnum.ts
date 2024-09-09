// Definición de las rutas de la aplicación, cada una de ellas tendrá su carptea en route
export enum RoutesEnum {
    infoUser = 0,
    pay = 1,
    result = 2,
}

// dirección de la transición, si es hacia delante o atrás
export enum TransitionDirection {
    next = 'next',
    prev = 'prev',
    none = 'none',
    slideDown = 'slideDown',
}

