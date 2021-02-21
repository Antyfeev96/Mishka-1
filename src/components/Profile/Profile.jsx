import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main>
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
            <MyPosts/>
        </main>
    );
};

export default Profile;
