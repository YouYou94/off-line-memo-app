import {
  Box,
  FeedBox,
  FeedHeader,
  UserBox,
  UserIcon,
  InfoBox,
  UserId,
  EnrolTime,
  ButtonBox,
  FeedArticle,
  FeedImage,
  FeedFooter,
} from './FeedStyled';

export const Feed = () => {
  return (
    <Box>
      <FeedBox>
        <FeedHeader>
          <UserBox>
            <UserIcon />
            <InfoBox>
              <UserId>id</UserId>
              <EnrolTime>time</EnrolTime>
            </InfoBox>
          </UserBox>
          <ButtonBox>버튼</ButtonBox>
        </FeedHeader>
        <FeedArticle>
          <FeedImage />
        </FeedArticle>
        <FeedFooter>일기 내용 들어가기</FeedFooter>
      </FeedBox>
      <FeedBox></FeedBox>
      <FeedBox></FeedBox>
      <FeedBox></FeedBox>
    </Box>
  );
};
