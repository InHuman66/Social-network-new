import React from 'react';
import classes from "./posts.module.scss";
import Post from './Post/post';
type propsType ={

}
let post = [
        {massage: 'hello' , like: 4 , id: 1 ,},
        {massage: 'I`m not human' , like: 2 , id: 2 ,},
        {massage: '......' , like: 3 , id: 3 ,},
        {massage: 'It`s me' , like: 6 , id: 4 ,},
    ]
const Posts:React.FC<propsType>= (props) => {
    let OnAddPost = ()=>{
        // props.addPost();
    };
    let onPostCheng = (e:React.FormEvent<HTMLTextAreaElement>)=> {
        // console.log('chang')
        // props.postCheng(e.currentTarget.value);
    };
    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
                <p>Add post</p>
                <textarea placeholder={'Your news...'} onChange={onPostCheng} value={'loki'}/>
                <button onClick={OnAddPost}>Send</button>
            </div>
            {post.map((massage) => <Post key={massage.id} img={''} message={massage.massage} like={massage.like} id={massage.id}/>)}
        </div>
    );
}

export default Posts;