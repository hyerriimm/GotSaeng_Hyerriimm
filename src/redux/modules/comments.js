import { createSlice } from '@reduxjs/toolkit';

export const comments = createSlice({
  name: 'comments', //이 모듈의 이름
  initialState: { // 이 모듈의 초기상태 값
    comments: [
      {
        todoId: 1,
        id: 1,
        nickname: '고양이',
        desc: '1번째 포스트의 1번 댓글입니다.',
      },
      {
        todoId: 1,
        id: 2,
        nickname: '강아지',
        desc: '1번째 포스트의 2번 댓글입니다.',
      },
    ],
  },
  reducers: { // 이 모듈의 Reducer 로직
    // 리듀서 안에 만든 함수 자체가 리듀서 로직이자, Action creator가 된다 ✨
    createComment(state, action) {
      state.comments.push(action.payload);
    },

    deleteComment(state, action) {
      let index = state.comments.findIndex(
        (comment) => comment.id === action.payload //payload는 comment의 id임
      );
      state.comments.splice(index, 1);
    },

    updateComment(state, action) {
      let index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id //payload는 수정된 comment객체 하나 postId, id, nickname, desc(수정)
      );
      state.comments.splice(index, 1, action.payload); // state에서 인덱스가 일치하는거 하나 제거하고 payload넣어라
    },
  },
});

export let { createComment, deleteComment, updateComment } = comments.actions;
// Action Creator를 내보내주기

export default comments;