import p from './Profile.module.css';

const Profile = () => {
    return (
      <main className={p.main}>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
          alt="beach"
        ></img>
      </div>
      <div>
        <img
          src="https://cdn.the-scientist.com/assets/articleNo/67431/aImg/37291/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-t.png"
          alt="animal"
        ></img>
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className='posts'>
        <div className={p.item}>Post</div>
        <div className={p.item}>Another Post</div>
        </div>
      </div>
    </main>
    )
}

export default Profile;