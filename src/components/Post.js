import '../css/Post.css'

function Post(props){
    return(
        <div id='post'>            
            <span>{props.id}</span>
            <span>{props.title}</span>
            <span>{props.author}</span>
            <span>{props.regDate}</span>
            <span>{props.fileExist}</span>
            <span>{props.hits}</span>
        </div>
    )

}

export default Post;