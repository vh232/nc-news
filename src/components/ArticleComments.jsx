import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';
import { getArticleComments } from '../../api';
import { useParams } from 'react-router-dom';

const ArticleComments = () => {

    const { article_id } = useParams()
    console.log(article_id)

    useEffect(() => {
        getArticleComments()
    }, [])

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(2),
        },
      }));

      const content = (
        <div>
         example comment
        </div>
      );

    return (
        <div className="article-comment-list">
             <Root>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Root>
        </div>
    )

};

export default ArticleComments