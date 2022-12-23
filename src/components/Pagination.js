
import '../css/pagination.css';
import{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faAngleRight,faAngleDoubleLeft,faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";


class Pagination extends Component{
  constructor(props){ //생성자
    //생성자: 객체가 생성될때 호출되는것
    super(props) //상위클래스 생성자 호출()
    this.state={
    }
  }

pageClick=(data)=>{
  alert("페이지 클릭!"+data) //1,2,3
  this.props.setCurrentPage(data)
  //App.js에서 넘어온 현재 페이지 설정하는 함수
}

//화살표 기능 구현
prevPage=()=>{
  alert("이전!")
  //currentPage
  //현재 페이지-1
  const prevPage = this.props.currentPage-1
  if(prevPage < 1){ //1보다 작음..0은 이동불가
    alert("이동불가!")
  }else {
    this.props.setCurrentPage(prevPage)
  }

}

nextPage=()=>{
  alert("다음!")
  //현재 페이지+1
  //현재 페이지+1이 끝번호 넘어가면 못넘어가게 아닐경우 이동
  const nextPage = this.props.currentPage+1

  const {total,postPerPage}=this.props
  const endpage=Math.ceil((total)/(postPerPage))//4 (끝페이지 구하기)

  if(nextPage > endpage){ //제일 끝 페이지(4) 뒤로는 이동불가 
    alert("이동불가!")
  }else {
    this.props.setCurrentPage(nextPage)
  }
}

prevEndPage=()=>{
  alert("맨앞으로!")


}

nextEndPage=()=>{
  alert("맨뒤로!")
  
}


render(){
  // 10/3 -> 3.333 - js,python
  // 10/3 -> 3 -> 4 - c,c++,java

  let pageNumbers=[]
  //var -> let, const - ES6
  const {total,postPerPage,currentPage}=this.props
  const endpage=Math.ceil((total)/(postPerPage))//4
  //10/3 -> 3.333 -> 4
  for(var i=1; i<=endpage; i++){
    pageNumbers.push(i)//
  }
  console.log(pageNumbers)//[1,2,3,4]

  const result = pageNumbers.map(
    (page)=>(<span id='page'
    className={currentPage===page? 'active':null}  //하이라이트 적용(조건부클래스)
    onClick={()=>this.pageClick(page)}>{page}</span>)
  )



  

  return(
      <div id='pagination'>
        <div id="pagination-wrap">
        <div>현재 페이지:{this.props.currentPage}</div>
        <div>페이지당 갯수:{this.props.postPerPage}</div>
        <div>총 글 갯수:{this.props.total}</div>
        <div id="page-wrap">
          <span id='page' class='prev-end' onClick={this.prevEndPage}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </span>  
          <span id='page' onClick={this.prevPage}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>        
          {result}
          <span id='page' onClick={this.nextPage}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <span id='page' class='next-end' onClick={this.nextEndPage}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          </span>
        </div>
        </div>
     </div>
   )
  }
}




export default Pagination;
