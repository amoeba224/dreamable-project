import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CompanyCard() {
  return (
    <Card style ={{ width: "80%" }}>
      <Card.Header>직무</Card.Header>
      <Card.Body>
        <Card.Title>기업 이름</Card.Title>
        <Card.Text>
          직무 및 조건 요약
        </Card.Text>
        <Button variant="primary" href="/companydetail">자세히 보기</Button>
      </Card.Body>
    </Card>
  );
}