import p from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import React from "react";

const Profile = () => {
    return (
        <div>
            <div className={p.background}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
                    alt="background"
                />
            </div>
            <div className={p.user}>
                <img
                    src='https://buzza.ru/uploads/memes/7bc0e1f0d4888e62b4ee611afd749503/QmLIFa.jpg'
                    alt="avatar"
                />
                <div className={p.box}>
                    <div className={p.name}>Dmitri Antyfeev</div>
                    <div className={p.birthday}>08.12.228</div>
                    <div className={p.info}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi est eveniet magnam
                        magni, maiores mollitia quasi sint veniam voluptatibus! Ad culpa eum nemo nobis perspiciatis
                        provident rem sed veritatis.
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
