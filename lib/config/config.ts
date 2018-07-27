class config {
    //数据库连接地址
    private host: string = 'localhost';
    //数据库端口号
    private port: number = 3306;
    //数据库用户名
    private userName: string | undefined;
    //数据库密码
    private password: string | undefined;
    //连接超时
    private connectionTimeout?: number = 10000;
    //日期是否以字符串形式返回
    //返回格式为:yyyy-MM-dd HH:mm:ss
    //如果为false则直接映射为javascript的日期类型
    private dateString?: boolean = true;
    //连接的数据库名称
    private dataBase?: string | undefined;
    //URL方式连接多个选项以‘&’分割
    private url?: string | undefined;
    //是否自动提交事务
    private autoCommit: boolean = true;
    //是否是只读事务
    private readonly: boolean = false;
    //设置数据库编码
    private encoding: string = 'utf8';
    //本地连接地址
    private localAddress: string | undefined;
    //本地连接端口号
    private localPort: number | undefined;
    //是否接收完成数据后断开连接
    private finshDataClose: boolean = true;
    //是否序列化对象
    private serializationObject: boolean = false;
    //是否自动分页
    private autoPage?: boolean = false;
    //unix系统数据库socket文件位置
    private socketPath: string | undefined;
    //是否验证数据库
    private verifyDataBase: boolean = true;
    //验证数据库的SQL
    private verifySql: string = 'SELECT 1'
    //是否启用连接池
    private isPool: boolean = false;
}