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

// "추가하기" 버튼 클릭 이벤트
document.querySelector('.submit-button').addEventListener('click', function() {
    const importance = document.querySelector('.importance').value; // 중요도 가져오기
    const content = document.querySelector('.bucket-content').value; // 내용 가져오기

    const newBucket = document.createElement('div');
    newBucket.classList.add('bucket');
    newBucket.textContent = `${content}`; // 내용 포함

    // 중요도에 따라 배경 이미지 설정
    if (importance === '높음') {
        newBucket.style.backgroundImage = "url('./assets/images/memo2.png')"; // 높은 중요도에 대한 배경 이미지
        newBucket.classList.add('high-importance'); // 필요한 추가 스타일을 적용하기 위한 클래스
    } else {
        // '중간' 또는 '낮음' 중요도에 대한 기본 배경 이미지
        newBucket.style.backgroundImage = "url('./assets/images/memo1.png')";
    }

    // 새 항목을 .bucketlist에 추가
    document.querySelector('.bucketlist').appendChild(newBucket);

    // 입력 필드 초기화 및 폼 숨기기
    document.querySelector('.bucket-content').value = '';
    document.querySelector('.add-form').style.display = 'none';
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
        // 삭제 버튼이 클릭된 경우, 버킷을 제거합니다
        e.target.closest('.bucket').remove();
    }
    if (e.target.classList.contains('complete-button')) {
        // 완료 버튼이 클릭된 경우, 완료 스타일을 적용합니다 (예: 텍스트 취소선)
        e.target.closest('.bucket').style.textDecoration = "line-through";
    }
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
    document.getElementById("musicButton").textContent = isPlaying ? "정지" : "재생";
});