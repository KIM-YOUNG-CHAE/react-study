import React from 'react';
import Todo from './Todo';

const TodoContainer = () => {

    const todos = [
        { "id": 1, "task": "아침 러닝 30분", "done": true },
        { "id": 2, "task": "TypeScript 공식 문서 읽기", "done": false },
        { "id": 3, "task": "영양제 챙겨 먹기", "done": true },
        { "id": 4, "task": "방 청소 및 분리수거", "done": false },
        { "id": 5, "task": "주간 업무 보고서 작성", "done": false },
        { "id": 6, "task": "책 1장 읽기", "done": true },
        { "id": 7, "task": "저녁 장보기 (계란, 우유)", "done": false },
        { "id": 8, "task": "물 2L 마시기", "done": true },
        { "id": 9, "task": "코드 리팩토링 진행", "done": false },
        { "id": 10, "task": "친구와 저녁 약속", "done": false }
    ]


    // 할 일이 완료되지 않은 데이터들만 할 일 목록으로 아래에 출력하기
    // const todoList = todos.filter((todo) => !todo.done);
    // const todoTask = todoList.map((todo, i) => (
    //     <Todo key={i} todo={todo} />
    // ))

    const todoTask = todos.map((todo, i) => (
         <Todo key={i} todo={todo} />
    ))


    return (
        <ul>
            {todoTask}
        </ul>
    );
};

export default TodoContainer;