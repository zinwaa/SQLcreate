var inputItem = [
    "智能导入",
    // "导入表", 
    "导入多条字段",
    // "导入建表SQL"
]
var tableItem = {
    databaseName: { title: "库名", text: "多个单词建议用下划线分割", requrid: false, default: "", isText: "text", key: "databaseName" },
    tableName: { title: "表名", text: "", requrid: true, default: "test_table", isText: "text", key: "tableName" },
    tableComment: { title: "表注释", text: "描述表的中文名称、作用等", requrid: false, default: "", isText: "text", key: "tableComment" },
    // generateNumber: { title: "生成条数", text: "", requrid: true, default: "20", isText: "text", key: "generateNumber" },
}
var fleidList = {
    fleidName: { title: "字段名", requrid: false, default: "username", text: "请输入字段名", isText: "text", key: "fleidName" },
    fleidType: { title: "字段类型", requrid: true, default: "", text: "请输入字段类型", isText: "text", key: "fleidType" },
    fleidDefault: { title: "默认值", requrid: false, default: "", text: "要和字段类型匹配", isText: "text", key: "fleidDefault" },
    fleidComment: { title: "注释", requrid: false, default: "", text: "用中文描述名称、作用等", isText: "text", key: "fleidComment" },
    fleidOnUpdata: { title: "onUpdata", requrid: false, default: "", text: "字段更新动作", isText: "text", key: "fleidOnUpdata" },
    fleidIsEmpty: { title: "非空", requrid: false, default: false, isText: "btn", key: "fleidIsEmpty" },
    fleidPrimaryKey: { title: "主键", requrid: false, default: false, isText: "btn", key: "fleidPrimaryKey" },
    fleidAddition: { title: "自增", requrid: false, default: false, isText: "btn", key: "fleidAddition" },
}
var analog = {

}
var example = {
    fleidJson: {
        ex: `"dbName": "zinwaa_db", "tableName": "user", "tableComment": "用户表",
"fieldList": [
{ "fieldName": "username", "comment": "用户名", "fieldType": "varchar(256)", "notNull": true, "primaryKey": false, "autoIncrement": false },
{ "fieldName": "id", "comment": "主键", "fieldType": "bigint", "notNull": true, "primaryKey": true, "autoIncrement": true },
{ "fieldName": "create_time", "comment": "创建时间", "defaultValue": "CURRENT_TIMESTAMP", "fieldType": "datetime", "notNull": true, "primaryKey": false, "autoIncrement": false },
{ "fieldName": "update_time", "comment": "更新时间", "defaultValue": "CURRENT_TIMESTAMP", "fieldType": "datetime", "notNull": true, "primaryKey": false, "autoIncrement": false, "fieldOnUpdata": "CURRENT_TIMESTAMP" },
{ "fieldName": "is_deleted", "comment": "是否删除(0-未删, 1-已删)", "defaultValue": "0", "fieldType": "tinyint", "notNull": true, "primaryKey": false, "autoIncrement": false }
]`
        ,
        placeholder: '请输入表结构JSON:'
    },
    fieldList: {
        ex: ['username', "id", "create_time", "update_time", "is_deleted"],
        placeholder: '请输入表的列名，多个列以【英文或中文逗号】分隔:'
    }
}
export{
    inputItem, tableItem, fleidList, example
}