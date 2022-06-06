

export interface RegisterForm {
    nombre: String,
    password: String,
    nombreUsuario: String,
    email: String,
    lastPasswordResetDate: String,
    enabled: boolean,
    authorities: [
        {
            id: number
        }
    ]
}
