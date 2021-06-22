import ilustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRom(){

  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustracão simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas dde sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  )
}