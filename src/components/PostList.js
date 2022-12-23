
import '../css/PostList.css';
import{Component} from 'react';
import Post from './Post';


class PostList extends Component{
  constructor(props){ //생성자
    //생성자: 객체가 생성될때 호출되는것
    super(props) //상위클래스 생성자 호출()
    this.state={
    }
  }


render(){
    const result=this.props.postList.map(
        (data)=>(<Post key={data.id} 
            id={data.id}
            title={data.title}
            author={data.author}
            regDate={data.regDate}
            fileExist={data.fileExist}
            hits={data.hits}
            />)
    )

  return(
      <div id='Post-list'>
        <div class="header-wrap">
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>등록일</span>
          <span>첨부</span>
          <span>조회</span>
        </div>
        {result}
     </div>
   )
  }
}




export default PostList;
