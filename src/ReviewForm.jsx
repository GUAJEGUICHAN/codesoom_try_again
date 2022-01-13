import TextField from './TextField';

export default function ReviewForm({
  onChange,
  onSubmit,
}) {
  return (
    <>
      <TextField
        name="score"
        label="평점"
        type="number"
        onChange={onChange}
      />
      <TextField
        name="description"
        label="리뷰 내용"
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>리뷰 남기기</button>
    </>
  );
}
