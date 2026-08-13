import React, { useState } from 'react';

const AttendanceContainer = () => {

    // isPresent: 출석 여부
    const attendanceData = [
        { id: 1, name: "홍길동", isPresent: true,  },
        { id: 2, name: "장보고", isPresent: false, },
        { id: 3, name: "이순신", isPresent: true, },
        { id: 4, name: "김철수", isPresent: false, },
        { id: 5, name: "김영희", isPresent: true, },
        { id: 6, name: "이민철", isPresent: false, },
        { id: 7, name: "김현빈", isPresent: true, },
        { id: 8, name: "김원빈", isPresent: false, },
        { id: 9, name: "김우빈", isPresent: true, },
        { id: 10, name: "박지성", isPresent: true },
    ];

    // 출석부 확인 로직 완성
    // 출석부 input 태그의 이름을 입력하고 엔터를 쳤을 때
    // 사용자가 출석했다면 "OOO 출석완료"을 출력한다.
    // 사용자가 출석하지 않았다면 "불출석"을 출력한다
    const [name, setName] = useState("")
    const [student, setStudent] = useState({
        result: "",
        isAttendance: false
    })
    const handleNameOnChange = (e) => setName(e.target.value)
    const search = (e) => {
        if(e.key === "Enter"){
            const foundStudent = attendanceData.find((student) => student.name === name && student.isPresent)

            // 학생이 없다면
            if(!foundStudent){
                setStudent({
                    result: "불출석",
                    isAttendance: false
                })
                return;
            }

            // 학생이 있다면
            setStudent({
                result: name + " 출석완료",
                isAttendance: true
            })
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='출석부를 검색하세요.'
                onKeyDown={search}
                onChange={handleNameOnChange} 
            />
            <p>{student.result}</p>
        </div>
    );
};

// export default AttendanceContainer;

// import React, { useState } from 'react';

// const AttendanceContainer = () => {

//     // isPresent: 출석 여부
//     const attendanceData = [
//         { id: 1, name: "홍길동", isPresent: true,  },
//         { id: 2, name: "장보고", isPresent: false, },
//         { id: 3, name: "이순신", isPresent: true, },
//         { id: 4, name: "김철수", isPresent: false, },
//         { id: 5, name: "김영희", isPresent: true, },
//         { id: 6, name: "이민철", isPresent: false, },
//         { id: 7, name: "김현빈", isPresent: true, },
//         { id: 8, name: "김원빈", isPresent: false, },
//         { id: 9, name: "김우빈", isPresent: true, },
//         { id: 10, name: "박지성", isPresent: true },
//     ];

//     // 출석부 확인 로직 완성
//     // 출석부 input 태그의 이름을 입력하고 엔터를 쳤을 때
//     // 사용자가 출석했다면 "OOO 출석완료"을 출력한다.
//     // 사용자가 출석하지 않았다면 "비출석"을 출력한다\

//     const attendanceDataTrue = attendanceData.filter((data) => data.isPresent).map((data) => data.name)
//     // console.log(attendanceDataTrue)

//     const [name, setName] = useState("")
//     const [value, setVlaue] = useState("")
//     const handleUserOnChange = (e) => setVlaue(e.target.value)
//     const handleUserOnKeyDown = (e) => {
//         if(e.key === "Enter"){
//            setName(attendanceDataTrue.includes(value) ? value + " 출석완료" : "비출석")
//         }
//     }

//     return (
//         <div>
//             <input type="text" placeholder="이름을 입력하세요" onChange={handleUserOnChange} onKeyDown={handleUserOnKeyDown}/>
//             <p>{name}</p>
//         </div>
        
//     );
// };

// export default AttendanceContainer;


