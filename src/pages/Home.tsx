import  { useHistory } from 'react-router-dom';
import ilustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home(){

  const history = useHistory();
  const { user, signWithGoogle } = useAuth();

  async function handleCreateRom(){
    if(!user){
      await signWithGoogle();
    }
    history.push('/rooms/new');
  }

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
      <button className="create-rom" onClick={handleCreateRom}>
        <img src={googleIconImg} alt="Logo do Google" />
        Crie sua sala com o google
      </button>
      <div className="separator">ou entre em uma sala</div>
      <form>
        <input type="text" placeholder="Digite o código da sala" />
        <Button type="submit">
          Entrar na sala
        </Button>
      </form>
    </div>
  </main>
</div>
)
}