document.addEventListener('DOMContentLoaded', () => {
  /**
   * input date 날짜 value값 초기 설정
   * 250314: 자정으로 넘어가면 날짜가 자동으로 안바뀌는 현상 수정
   * 참고: https://anywaydevlog.tistory.com/46
   */
  const dateBox = document.querySelectorAll('.datebox');
  dateBox.forEach((val) => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const dateOffset = new Date(new Date().getTime() - offset);
    val.value = dateOffset.toISOString().substring(0, 10);
  });

  /**
   * 언어 설정 드롭다운 메뉴
   */
  const langButton = document.getElementById('lang-button');
  const dropdownList = document.querySelector('.dropdown-list');

  // 드롭다운 토글
  langButton.addEventListener('click', () => {
    dropdownList.classList.toggle('active');
  });

  // 드롭다운 항목 클릭 시 버튼 업데이트
  const dropdownItems = document.querySelectorAll('.dropdown-list a');
  dropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // 선택된 언어와 이미지 업데이트
      const langText = item.querySelector('span').textContent;
      const langImageSrc = item.dataset.img;

      document.getElementById('lang-text').textContent = langText;
      document.getElementById('lang-image').src = langImageSrc;

      // 드롭다운 숨기기
      dropdownList.classList.remove('active');
    });
  });

  // 드롭다운 외부 클릭 시 드롭다운 숨기기
  document.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.classList.remove('active');
    }
  });
});
