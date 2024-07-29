import React from 'react';
import {Link} from "react-router-dom";

const SmoothScroll = () => {
    const smoothRef = React.useRef(null);
    const onClickHandler = () => {
        smoothRef.current.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div>
            <section id={"cao"}>
                <h1 ref={smoothRef} id={"cao"}>FAEFEAEFAAFEFEAAFE</h1>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae culpa cumque esse
                    iure nemo nisi odit, perferendis ut? A alias, aliquid aspernatur autem blanditiis cumque distinctio
                    dolore doloremque error est eum fugiat hic maiores nemo odio perferendis quae quibusdam quisquam
                    quos repudiandae sapiente sint sit tempora, tempore ullam, unde veniam. Ab dolore dolorem facere
                    iusto nulla reprehenderit sunt veniam voluptate voluptates. Ad cum cumque explicabo iste nostrum
                    reiciendis velit! Maxime molestiae mollitia obcaecati quo repellendus totam voluptatibus. A adipisci
                    architecto delectus expedita reiciendis similique sint! Adipisci aperiam aspernatur, distinctio
                    exercitationem ipsa, libero magnam nesciunt optio quam recusandae sunt?</h1>
                <button onClick={onClickHandler}>LEAD ME TO CAO</button>
            </section>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default SmoothScroll;