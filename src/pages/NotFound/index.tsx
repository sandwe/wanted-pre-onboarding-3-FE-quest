import { Button } from '@/components';

function NotFound() {
  return (
    <>
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <p>방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수 없습니다.</p>
      <Button>홈으로 이동할래요</Button>
    </>
  );
}

export default NotFound;
