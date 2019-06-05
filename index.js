window.addEventListener('load', function () {
    let tab = document.querySelectorAll('.tab>li');
    let content =document.querySelector('.content')
    // let backgroundt =document.querySelector('.backgroundt');
    let prev = 0;
    let todolist= [
        {id:1,content:'遇见一个未知的高汕',ctime:'2018/07/09',status:true},
        {id:2,content:'开始被高汕欺负',ctime:'2018/10/14',status:true},
        {id:3,content:'要变成一头猪的高汕',ctime:'2019/09/22',status:false},
        {id:4,content:'一个欠揍的高汕',ctime:'2019/06/05',status:true}
    ]
    let index = todolist.find(ele=>ele.id==2);
    console.log(index);
    console.log(todolist);
    // tab[1].onclick
    // tab(1).onclick
    tab.forEach(function (ele, index) {
        ele.onclick = function () {
            tab[prev].classList.remove('hot');
            this.classList.add('hot');

            prev = index
            let type = this.getAttribute('type')
            console.log(type);
            let arr =[];
            console.log(arr);
            switch (type) {
                case 'all':
                    arr = todolist;
                    console.log('执行all');
                    break;
                case'done':
                    arr=todolist.filter(function (ele) {
                        return ele.status })
                    break;

                case'doing':
                    arr=todolist.filter(function (ele) {
                        return !ele.status

                    })
                    break;
            }
            // tab(1).onclick
            render(arr)
            console.log(111);
            // console.log(render(arr),1);
        }
    })
    content.onclick =function (e) {
        let  target =e.target;
        let  id = target.parentNode.id;
        if (target.nodeName=='SPAN'){
            let  index =todolist.findIndex(ele => ele.id ==id);
            todolist.splice(index,1);
            console.log(index);
            console.log('qunima');
            render(todolist)
        }
    }
    function render(arr) {
        let html =``;
        arr.forEach(function (ele,index) {
            if (ele.status){
                html+=`
                  <li>
                  <input type="checkbox" checked><p>${ele.content}</p><span>❌</span><time>${ele.ctime}</time>
</li>
                  `;
            }else { html+=`
                  <li>
                  <input type="checkbox" ><p>${ele.content}</p><span>❌</span><time>${ele.ctime}</time>
</li>
                  `;

            }
        })
        content.innerHTML=html
    }
    // render(arr)

})


