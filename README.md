# 시후의 그리스로마신화 — 새 에피소드 추가 방법
1. `episodes/ep2/` 폴더를 만들고 `images/`, `audio/` 하위 폴더를 둡니다.
2. 장면 그림(`images/s1.jpg`…), 표지(`images/cover.jpg`)를 넣습니다. (3:4 권장, 그림 속 글자는 피하기)
3. `episodes/ep1/episode.json`을 복사해 `ep2/episode.json`으로 고칩니다: `id`, `number`, `title`, `subtitle`, `scenes[]`(image, audio, text, 선택: `video`), `message.points`, `quiz[]`(q, options, answer=정답 번호 0부터).
4. 나레이션 생성: `pip install edge-tts` 후 `edge-tts --voice ko-KR-SunHiNeural --rate=-10% --text "문장" --write-media episodes/ep2/audio/s1.mp3`
5. `python3 build.py` 실행 → `catalog.js`가 갱신되어 홈 화면에 카드가 자동 추가됩니다.
6. `index.html`을 파일로 바로 열어도 되고(오프라인), 정적 호스팅에 폴더째 올리면 됩니다.
