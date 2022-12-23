
import './App.css';
import{Component} from 'react';
import PostList from './components/PostList';
import Pagination from './components/Pagination';


class App extends Component{
  constructor(props){ //생성자
    //생성자: 객체가 생성될때 호출되는것
    super(props) //상위클래스 생성자 호출()
    this.state={
      postList:[
        {id:10,title:'title-10',contents:'contents-10',author:'문재인',regDate:'2022-11-06',fileExist:true,hits:10},
        {id:9,title:'title-9',contents:'contents-9',author:'김철수',regDate:'2022-11-06',fileExist:true,hits:9},
        {id:8,title:'title-8',contents:'contents-8',author:'이민호',regDate:'2022-11-06',fileExist:false,hits:8},
        {id:7,title:'title-7',contents:'contents-7',author:'김채현',regDate:'2022-11-06',fileExist:true,hits:7},
        {id:6,title:'title-6',contents:'contents-6',author:'송중기',regDate:'2022-11-06',fileExist:false,hits:6},
        {id:5,title:'title-5',contents:'contents-5',author:'이은현',regDate:'2022-11-06',fileExist:false,hits:7},
        {id:4,title:'title-4',contents:'contents-4',author:'이은우',regDate:'2022-11-06',fileExist:true,hits:2},
        {id:3,title:'title-3',contents:'contents-3',author:'이현성',regDate:'2022-11-06',fileExist:false,hits:15},
        {id:2,title:'title-2',contents:'contents-2',author:'이하온',regDate:'2022-11-06',fileExist:true,hits:4},
        {id:1,title:'title-1',contents:'contents-1',author:'관리자',regDate:'2022-11-06',fileExist:false,hits:10}
      ],
      postPerPage:3, //페이지당 글갯수
      currentPage:1
      
    }
    
  }

setCurrentPage=(page)=>{
  alert('setCurrentPage!:'+page)
  this.setState({
    currentPage:page
  })
}



currentPostList=(totalPostList)=>{
  //const slicedList = totalPostList.slice(0,3)//0,1,2 - 1페이지
  //const slicedList = totalPostList.slice(3,6)//3,4,5 - 2페이지
  //const slicedList = totalPostList.slice(6,9)//6,7,8 - 3페이지
  //const slicedList = totalPostList.slice(6,12)//9,10,11 - 4페이지 - 10개니까 이건 배열이 넘침.. 여기서는 그냥 안찍고 넘어감 
  const {currentPage,postPerPage}=this.state
  //비구조화할당, 구조분해할당, destruction assingnment
  const startIndex = (currentPage-1)*postPerPage
  const endIndex = startIndex+postPerPage

  const slicedList = totalPostList.slice(startIndex,endIndex)
  return slicedList;
}

render(){
  return(
      <div id='App'>
       <PostList postList={this.currentPostList(this.state.postList)}/>
       <Pagination total={this.state.postList.length}
       postPerPage={this.state.postPerPage}
       currentPage={this.state.currentPage} //currentPage(현재페이지)값 넘기기
       setCurrentPage={this.setCurrentPage}/>

     </div>
   )
  }
}




export default App;
