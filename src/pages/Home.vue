<template>
  <div ref="board"
       class="personal-board task-board"
       :style="{height: `${boardHeight}px`}">
    <div class="lane" :class="[status]"
         v-for="(statusTitle, status) in taskStatus">
      <div class="title">{{statusTitle}}</div>
      <div class="new-task">
        <NewTaskCard/>
      </div>
    </div>
  </div>
</template>
<script>
import NewTaskCard from '../components/NewTaskCard.vue'
export default {
  components: {
    NewTaskCard,
  },
  data () {
    return {
      taskStatus: {
        draft: '未开始',
        dev: '开发中',
        qa: '已提测',
        done: '已完成',
      },
      boardHeight: 0,
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    const rect = this.$refs.board.getBoundingClientRect()
    this.boardHeight = window.innerHeight - rect.top
  },
}
</script>
<style scoped lang="less">
.task-board {
  display: flex;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow-x: auto;
  .lane {
    height: 100%;
    display: flex;
    width: 280px;
    flex-shrink: 0;
    flex-direction: column;
    .title {
      flex-shrink: 0;
      height: 40px;
      box-sizing: border-box;
      padding: 0 20px;
      justify-content: center;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 18px;
      border-bottom: 6px solid transparent;
    }
    .new-task {
      flex-shrink: 0;
    }
    .cards-wrapper {
      flex: 1;
      overflow: hidden;
      .cards {
        overflow-y: auto;
        padding: 0 6px;
        position: relative;
        height: 100%;
      }
    }
    &.draft {
      .title {
        border-color: var(--baseGrey);
      }
    }
    &.dev {
      .title {
        border-color: var(--baseBlue);
      }
    }
    &.qa, &.testing {
      .title {
        border-color: var(--baseRed);
      }
    }
    &.done {
      .title {
        border-color: var(--baseGreen);
      }
    }
  }
}

.lane {
  &.done {
    .show-all, .task {
      opacity: .5;
      transition: all .2s;
      &:hover {
        opacity: 1;
      }
    }
    .show-all {
      text-align: center;
      background: #fff;
      padding: 6px;
      cursor: pointer;
    }
  }
  &.searchResult {
    .task {
      opacity: 1;
    }
  }
}
</style>