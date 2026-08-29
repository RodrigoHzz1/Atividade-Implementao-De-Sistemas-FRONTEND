export const getUsuarioLogado = () => {
  const user = localStorage.getItem("@App:user");
  return user ? JSON.parse(user) : null;
};

export const loginSimulado = (email, senha) => {
  let perfil = "CLIENTE";
  if (email.includes("admin")) perfil = "ADMINISTRADOR";
  else if (email.includes("tecnico")) perfil = "TECNICO";

  const usuario = {
    id: 1,
    nome: email.split("@")[0].toUpperCase(),
    email: email,
    perfil: perfil,
    token: "token-falso-12345"
  };

  localStorage.setItem("@App:user", JSON.stringify(usuario));
  return usuario;
};

export const logoutSimulado = () => {
  localStorage.removeItem("@App:user");
};