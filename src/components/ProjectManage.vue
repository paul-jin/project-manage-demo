<template>
  <div>
    <el-input v-model="projectName"
              placeholder="Please key project name for search"
              allowClear
              style="margin: 10px; width: 40%">
    </el-input>

    <el-table :data="projectList.filter(element => !projectName || element.name.toLowerCase().includes(projectName.toLowerCase()))"
              current-row-key="name">
      <el-table-column label="Name"
                       prop="name"
                       width="180">
      </el-table-column>

      <el-table-column label="Users"
                       prop="users"
                       width="90">
      </el-table-column>
      <el-table-column label="Users"
                       prop="users"
                       width="90">
      </el-table-column>

      <el-table-column label="Dashboards"
                       prop="dashboards"
                       width="90">
        <template slot-scope="scope">
          <el-tag :type="scope.row.dashboards == '2' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.dashboards}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Category"
                       prop="category"
                       width="180">
        <template slot-scope="scope">
          <el-tag :type="scope.row.category === 'D' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.category}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Action">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  name: 'ProjectManage',
  data () {
    return {
      projectName: '',
      projectList: [
        { name: 'Project A', users: 4, dashboards: 3, category: 'D' },
        { name: 'Project B', users: 2, dashboards: 4, category: 'C' },
        { name: 'Project C', users: 1, dashboards: 2, category: 'F' },
        { name: 'Project D', users: 3, dashboards: 2, category: 'D' },
      ],

    }
  },
  methods: {
    handleDelete (index, record) {
      this.$confirm('确认删除', '删除项目', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.projectList.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
