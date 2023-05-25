import './css/Task.css'
import {useState } from "react";

function Task() {
    const [openTab1,setOpenTab1]=useState(false)
    const [openTab2,setOpenTab2]=useState(false)
    const [openTab3,setOpenTab3]=useState(false)
    const [sus,setSus]=useState({
        id:[],
        status:''    
})
    const onTabs=(sus1,i)=>{
        console.log([...[i]].push(i))
        setSus({
            id:i,
            status:sus1
        })
    }
    console.log(sus)
    const task2=[]
    const task3=[]
    const task1=[]
  
    for(let i=0;i<12;i++){
        task1.push(
            <div>
                <ul id={i} className={((sus.status=='В работе'&&sus.id==i))?'task_body_tab1_task at_work_ul':'task_body_tab1_task'}>
                    <li className='task_body_header_tab1'>
                        01.01.0001
                    </li>
                    <li className='task_body_header_tab2'>
                        Шифр задачи
                    </li>
                    <li className='task_body_header_tab3'>
                        48/21 - 

                    </li>
                    <li className='task_body_header_tab4'>
                        Прозвонить Копьева
                    </li>
                    <li className='task_body_header_tab5'>
                       <select id={"value"+i} className={((document.getElementById("value"+i))=='В работе'&&sus.id==i)?'task_body_header_tab5_select at_work_li':((sus.status=='На паузе'&&sus.id==i)?'task_body_header_tab5_select  pause':'task_body_header_tab5_select')} onChange={e => {onTabs(e.target.value,i)}} >
                            <option>Выполнено</option>
                            <option>На паузе</option>
                            <option>В работе</option>
                        </select>
                    </li>
                    <li className='task_body_header_tab6'>
                        Иванов В.А.
                    </li>
                    <li className='task_body_header_tab7'>
                        Свердлова А. И.
                    </li>
                    <li className='task_body_header_tab8'>
                        2
                    </li>
                    <li className='task_body_header_tab9'>
                        Комментарий
                    </li>
                    <li className='task_body_header_tab10'>
                        00:15:00
                    </li>
                    <li className='task_body_header_tab11'>
                        00:00:14
                    </li>
                    <li className='task_body_header_tab12'>
                        01/01/0001 00:00:00
                    </li>
                    <li className='task_body_header_tab13'>
                        01/24/2023 10:23:17
                    </li>
                </ul>
            </div>
        )
  

    
   }
    const openTask1=()=>{
        setOpenTab1((openTab1)?false:true)
        setOpenTab2(false)
        setOpenTab3(false)
    }
    const openTask2=()=>{
        setOpenTab2((openTab2)?false:true)
        setOpenTab1(false)
        setOpenTab3(false)
    }
    const openTask3=()=>{
        setOpenTab3((openTab3)?false:true)
        setOpenTab2(false)
        setOpenTab1(false)
    }

    return (
        <div className="task">
            <h1 className="task_title">Задачи</h1>
            <div className="task_body">
                <ul className='task_body_header'>
                    <li className='task_body_header_tab1'>
                        Дата
                    </li>
                    <li className='task_body_header_tab2'>
                        Шифр задачи
                    </li>
                    <li className='task_body_header_tab3'>
                        Шифр проекта
                    </li>
                    <li className='task_body_header_tab4'>
                        Задача
                    </li>
                    <li className='task_body_header_tab5'>
                        Статус
                    </li>
                    <li className='task_body_header_tab6'>
                        Ответственный
                    </li>
                    <li className='task_body_header_tab7'>
                        Переназначить
                    </li>
                    <li className='task_body_header_tab8'>
                        Приоритет
                    </li>
                    <li className='task_body_header_tab9'>
                        Комментарий
                    </li>
                    <li className='task_body_header_tab10'>
                        План время
                    </li>
                    <li className='task_body_header_tab11'>
                        Факт время
                    </li>
                    <li className='task_body_header_tab12'>
                        Начал
                    </li>
                    <li className='task_body_header_tab13'>
                        Завершил
                    </li>
                </ul>
                <div className='task_body_tab1'>
                    <div onClick={openTask1} className='task_body_tab1_header'>
                        <h2>Выполненные задачи</h2>
                    </div>
                    {(openTab1)?task1:null}
                </div>
                <div className='task_body_tab2'>
                    <div onClick={openTask2} className='task_body_tab1_header'>
                        <h2>Задачи на сегодня</h2>
                    </div>
                    {(openTab2)?task1:null}
                </div>
                <div className='task_body_tab3'>
                    <div onClick={openTask3} className='task_body_tab1_header'>
                        <h2>Предстоящие задачи</h2>
                    </div>
                    {(openTab3)?task1:null}
                </div>
            </div>
        </div>
    )
}
export default Task;
