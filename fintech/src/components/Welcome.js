const Welcome = ({username, age, major}) => {
    return(
      <>
        <p>{username}님 {age}세 {major}전공 안녕하세요</p>
      </>
    );
  };

  export default Welcome;