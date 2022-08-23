<template>
  <div class="new-task-card"
       @click="clickContainer">
    <div class="inner"
         v-if="showCard">
      <el-form ref="nForm"
               :model="task">
        <el-form-item prop="title"
                      :rules="{ required: true, message: '请输入任务标题', trigger: 'none' }">
          <el-input ref="input"
                    autofocus
                    type="textarea"
                    :autosize="{minRows: 2}"
                    size="small"
                    placeholder="请输入任务标题"
                    v-model="task.title"></el-input>
        </el-form-item>
        <div class="buttons"
             @click="showCard=false">
          <el-button type="primary"
                     :loading="loading.submit"
                     @click.stop="submitNewTask"
                     size="small">确定
          </el-button>
          <div class="icon-close">x</div>
        </div>
      </el-form>
    </div>
    <div v-else
         class="inner entry"
         @click="clickNewTaskEntry">
      +
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data () {
    return {
      showCard: false,
      task: null,
      loading: {
        submit: false,
      }
    }
  },
  methods: {
    initTaskModel () {
      this.task = {
        title: '',
      }
    },
    clickContainer (e) {
      // 实现同一时间只有一个新建任务框
      if (this.showCard) e.stopPropagation()
    },
    clickNewTaskEntry () {
      setTimeout(() => {
        this.showCard = true
      })
    },
    async submitNewTask () {
      await this.$refs.nForm.validate()
      this.loading.submit = true
      await axios.post('/task/upsert', this.task).finally(() => {
        this.loading.submit = false
      })
      this.initTaskModel()
      this.showCard = false
      this.$message.success('创建成功')
    },
  },
  created () {
    this.closeHandler = () => {
      this.showCard = false
      this.initTaskModel()
    }
    window.addEventListener('click', this.closeHandler)
  },
  unmounted () {
    window.removeEventListener('click', this.closeHandler)
  }
}
</script>
<style lang="less"
       scoped>
.new-task-card {
  padding: 0 6px;
  margin-bottom: 10px;

  .category-group {
    margin-bottom: -6px;
    line-height: 1;

    .item {
      margin: 0 6px 6px 0;
    }

    .prompt-title {
      margin-bottom: 10px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .icon-close {
      font-size: 16px;
      margin-left: 10px;
    }
  }

  .inner {
    padding: 12px;
    background: #fff;
    border-radius: 4px;
  }

  .entry {
    padding: 6px;
    text-align: center;
    cursor: pointer;
  }
}
</style>