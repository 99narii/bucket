// "꿈 추가하기" 버튼 클릭 이벤트
document.querySelector('.add-button').addEventListener('click', function() {
    const addForm = document.querySelector('.add-form');
    // addForm의 표시 상태를 토글합니다.
    if (addForm.style.display === 'none' || addForm.style.display === '') {
        addForm.style.display = 'block'; // 폼을 표시합니다.
    } else {
        addForm.style.display = 'none'; // 폼을 숨깁니다.
    }
});

document.querySelector('.submit-button').addEventListener('click', function() {
    const importance = document.querySelector('.importance').value; // 중요도 가져오기
    const content = document.querySelector('.bucket-content').value; // 내용 가져오기

    // 새로운 버킷 항목 컨테이너 생성
    const newBucket = document.createElement('div');
    newBucket.classList.add('bucket');

    // 버킷 내용을 담을 p 태그 생성
    const pTag = document.createElement('p');
    pTag.textContent = content; // p 태그에 내용 추가

    // p 태그를 newBucket에 추가
    newBucket.appendChild(pTag);

    // 중요도에 따라 배경 이미지 설정
    if (importance === '높음') {
        newBucket.style.backgroundImage = "url('./assets/images/memo2.png')";
        newBucket.classList.add('high-importance'); // 추가 스타일을 위한 클래스
    } else {
        newBucket.style.backgroundImage = "url('./assets/images/memo1.png')";
    }

    // "완료"와 "삭제" 버튼을 포함하는 컨테이너 생성 및 추가
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('bucket-buttons');

    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.addEventListener('click', function() {
        pTag.style.textDecoration = 'line-through';
        
        completeButton.addEventListener('click', function() {
            // pTag의 현재 text-decoration 스타일을 확인합니다.
            const currentDecoration = pTag.style.textDecoration;
        
            // text-decoration 스타일이 line-through이면 제거하고, 아니면 추가합니다.
            if (currentDecoration === 'line-through') {
                pTag.style.textDecoration = 'none';
            } else {
                pTag.style.textDecoration = 'line-through';
            }
        });
        
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click', function() {
        newBucket.remove();
    });

    buttonsContainer.appendChild(completeButton);
    buttonsContainer.appendChild(deleteButton);
    newBucket.appendChild(buttonsContainer);

    // 새로운 버킷을 .bucketlist에 추가
    document.querySelector('.bucketlist').appendChild(newBucket);

    // 입력 필드 초기화 및 폼 숨기기
    document.querySelector('.bucket-content').value = '';
    document.querySelector('.add-form').style.display = 'none';
});





let isPlaying = false;

// 버튼 클릭 이벤트 리스너
document.getElementById("musicButton").addEventListener("click", function() {
    const audio = document.getElementById("backgroundMusic");

    if (isPlaying) {
        audio.pause(); // 오디오 정지
    } else {
        audio.play(); // 오디오 재생
    }
    // 재생 상태 토글
    isPlaying = !isPlaying;

    // 버튼 텍스트 업데이트
    document.getElementById("musicButton").textContent = isPlaying ? "❚❚" : "▶";
});