package com.study.springstudy.springmvc.chap05.service;

import com.study.springstudy.springmvc.chap05.entity.Reaction;
import com.study.springstudy.springmvc.chap05.entity.ReactionType;
import com.study.springstudy.springmvc.chap05.mapper.ReactionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ReactionService {
    private final ReactionMapper reactionMapper;

    // 공통 리액션 DB처리 메서드
    private void handleReaction(long boardNo, String account, ReactionType newReactionType){
        // 처음 리액션을 한다? -> 좋아요든 싫어요든 insert
        // 기존 리액션을 취소한다? -> 기존 데이터를 delete
        // 기존 리액션을 변경한다? -> 기존 리액션 데이터를 delete 후 새로운 리액션을 insert

        // 1. 현재 게시물에 특정 사용자가 리액션을 했는지 확인
        Reaction existingReaction = reactionMapper.findOne(boardNo, account);

        // 새 라이크 리액션 객체
        Reaction newReaction = Reaction.builder()
                .account(account)
                .boardNo(boardNo)
                .reactionType(newReactionType)
                .build();

        if(existingReaction != null){ // 처음 리액션이 아닌경우
            if(existingReaction.getReactionType() == newReactionType){
                // 동일한 리액션이기 때문에 취소
                reactionMapper.delete(boardNo, account);
            }else{
                reactionMapper.delete(boardNo, account); // 기존리액션 disLike 취소
                reactionMapper.save(newReaction); // 새 리액션 Like생성
            }

        }else{
            // 처음 리액션을 한 경우
            reactionMapper.save(newReaction); // 새 리액션 like 생성
        }
    }

    // 좋아요 중간처리
    public void like(long boardNo, String account){
       handleReaction(boardNo, account, ReactionType.LIKE);
    }
    // 싫어요 중간처리
    public void dislike(long boardNo, String account){
        handleReaction(boardNo, account, ReactionType.DISLIKE);
    }
}
