import p from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={p.background}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
                    alt="background"
                ></img>
            </div>
            <div className={p.user}>
                <img
                    src='https://buzza.ru/uploads/memes/7bc0e1f0d4888e62b4ee611afd749503/QmLIFa.jpg'
                    alt="avatar"
                ></img>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
