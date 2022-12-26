OC.L10N.register(
    "recognize",
    {
    "Recognize" : "识别",
    "Smart media tagging for Nextcloud" : "智能的媒体文件标签分类",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "这款应用会浏览你的媒体收藏并添加合适的标签，自动对你的照片和音乐进行分类。\n\n* 📷 👪 从联系人照片中识别人脸\n* 📷 🏔 识别动物、风景、食物、车辆、建筑和其他物体\n* 📷 🗼 认识地标和纪念碑\n* 👂 🎵 识别音乐流派\n* ⚡ 标签通过Nextcloud的协作标签工作，允许你的任何应用程序访问\n* 👂使用声音播放应用欣赏你标记的音乐\n* 📷用照片应用查看你标记的照片\n\n安装后，你可以在管理设置中启用标签。\n\n要求：\n- PHP 7.4 及以上版本\n- 启用应用程序 \"collaborative tags\"。\n- 对于本地速度：\n- 处理器：x86 64 位（支持 AVX 指令）\n- 带有 glibc 的系统（通常是 Linux 的标准；Alpine linux 和 FreeBSD *不是*这种系统）\n- 为了达到次原生速度（使用 JavaScript 模式）\n- 处理器：x86 64 位，arm64，armv7l（不需要 AVX）\n- 使用 glibc 或 musl 的系统（包括 Alpine linux）。\n- 约 4GB 的空闲内存（如果你正在努力工作，确保你有一些可用的交换空间）\n\n该应用程序不会向云提供商或类似服务发送任何敏感数据。所有的处理都是在你的 Nextcloud 机器上完成的，使用在 Node.js 中运行的 Tensorflow.js。",
    "Status" : "状态",
    "The machine learning models have been downloaded successfully." : "机器学习模型已被成功下载。",
    "The machine learning models still need to be downloaded." : "机器学习模型仍然需要下载。",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "无法执行 Node.js 二进制文件。你可能需要手动设置工作二进制文件的路径。",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "后台工作不通过 cron 执行。此程序要求后台作业通过 cron 执行。",
    "The app is installed and will automatically classify files in background processes." : "该应用程序安装后将自动对后台进程中的文件进行分类。",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "目前没有选择下面的标签选项。该应用程序目前将不做任何事情。",
    "Image tagging" : "图像标记",
    "Face recognition is working. " : "人脸识别正在发挥作用。",
    "An error occurred during face recognition, please check the Nextcloud logs." : "在人脸识别过程中发生了一个错误，请检查 Nextcloud 的日志。",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "正在等待人脸识别的状态报告。如果该信息持续超过 15 分钟，请检查 Nextcloud 的日志。",
    "Face recognition:" : "人脸识别：",
    "Queued files" : "个排队等候的文件",
    "Last classification: " : "最后一次分类时间：",
    "Object recognition is working." : "物体识别正在发挥作用。",
    "An error occurred during object recognition, please check the Nextcloud logs." : "在物体识别过程中发生了一个错误，请检查 Nextcloud 的日志。",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "正在等待物体识别的状态报告。如果该信息持续超过 15 分钟，请检查 Nextcloud 的日志。",
    "Object recognition:" : "物体识别：",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "启用人脸识别（按照片应用中出现的人将图片分组）。",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "每次作业运行要处理的文件数量（每 5 分钟安排一次作业；对于正常操作大约 500 或更多，在 WASM 模式下建议大约 50）。",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "实现物体识别（例如食物、车辆、景观）。",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "每次作业运行要处理的文件数量（每 5 分钟安排一次作业；对于正常操作大约 100 或更多，在 WASM 模式下建议大约 20）。",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "实现地标识别（例如埃菲尔铁塔、金门大桥）。",
    "Audio tagging" : "音频标记",
    "Audio recognition is working." : "音频识别正在发挥作用。",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "在音频识别过程中发生了一个错误，请检查 Nextcloud 的日志。",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "正在等待音频识别的状态报告。如果该信息持续超过15分钟，请检查 Nextcloud 的日志。",
    "Music genre recognition:" : "音乐流派识别：",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "能够识别音乐类型（例如流行、摇滚、民谣、金属、新时代）。",
    "Video tagging" : "视频标记",
    "Video recognition is working." : "视频识别正在发挥作用。",
    "An error occurred during video recognition, please check the Nextcloud logs." : "在视频识别过程中发生了一个错误，请检查 Nextcloud 的日志。",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "正在等待视频识别的状态报告。如果该信息持续超过 15 分钟，请检查 Nextcloud 的日志。",
    "Video recognition:" : "视频识别：",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "实现人类动作识别（例如掰手腕、运篮球、转呼啦圈）。",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "每次作业运行要处理的文件数量（每 5 分钟安排一次作业；对于正常操作大约 20 或更多，在 WASM 模式下建议大约 5）。",
    "Reset" : "重置",
    "Click the button below to remove all tags from all files that have been classified so far." : "点击下面的按钮，从迄今为止已分类的所有文件中移除所有标签。",
    "Reset tags for classified files" : "重置分类文件的标签",
    "Click the button below to remove all face detections from all files that have been classified so far." : "点击下面的按钮，从迄今为止已分类的所有文件中移除所有面部检测。",
    "Reset faces for classified files" : "重置分类文件的面孔",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "点击下面的按钮，重新扫描这个实例中的所有文件，并将它们添加到分类器队列中。",
    "Rescan all files" : "重新扫描所有文件",
    "Terminal commands" : "终端命令",
    "To trigger a full classification run manually, run the following command on the server terminal." : "要手动触发全面分类运行，在服务器终端运行以下命令。",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "要在执行分类作业之前下载所有模型，在服务器终端运行以下命令。",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "你可以用下面的命令重置所有以前被 \"识别 \"分类的文件的标签。",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "你可以用以下命令删除所有不再有任何文件与之相关联的标签。",
    "CPU cores" : "CPU 核心",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "默认情况下，所有可用的 CPU 核心将被使用，这可能会使你的系统处于相当大的负荷之下。为了避免这种情况，你可以限制 CPU 核心的使用量。",
    "Number of CPU Cores (0 for no limit)" : "CPU 核心数（0 表示无限制）。",
    "Tensorflow WASM mode" : "Tensorflow 的 WASM 模式",
    "Checking CPU" : "正在检查 CPU",
    "Could not check whether your machine supports native TensorFlow operation." : "无法检查你的机器是否支持原生 TensorFlow 操作。",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "你的电脑支持原生 TensorFlow 操作，你不需要 WASM 模式。",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM模式被自动激活，因为你的机器不支持原生 TensorFlow 操作。",
    "Enable WASM mode" : "启用 WASM 模式",
    "Tensorflow GPU mode" : "Tensorflow GPU 模式",
    "Enable GPU mode" : "启用 GPU 模式",
    "Node.js" : "Node.js",
    "Checking Node.js" : "正在检查 Node.js 的情况",
    "Node.js {version} binary was installed successfully." : "Node.js {version} 二进制文件已成功安装。",
    "Checking libtensorflow" : "正在检查 libtensorflow 的情况",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "无法在 Node.js 中加载 libtensorflow。你可以尝试手动安装 libtensorflow 或在 WASM 模式下运行。",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "在 Node.js 中成功加载了 libtensorflow，但无法加载 GPU。请确保 CUDA 工具包和 cuDNN 已安装并可访问，或者关闭 GPU 模式。",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow 已成功加载到 Node.js 中。",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "无法在 Node.js 中加载 Tensorflow WASM。你的安装出了问题。",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM 已成功加载到 Node.js 中。",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "如果自带的 Node.js 二进制文件由于某种原因不能在你的系统上运行，你可以将路径设置为一个自定义的 node.js 二进制文件。目前支持的是 Node v14.17 和更新的 v14 版本。",
    "Your server does not support AVX instructions" : "你的服务器不支持 AVX 指令",
    "Your server does not have an x86 64-bit CPU" : "你的服务器没有 x86 64 位 CPU",
    "Your server uses musl libc" : "你的服务器使用 musl libc",
    "Failed to load settings" : "加载设置失败",
    "Failed to save settings" : "保存设置失败",
    "never" : "从不",
    "{time} ago" : "{time} 之前",
    "Cat" : "猫",
    "Animal" : "动物",
    "Wildlife" : "野生动物",
    "Nature" : "自然",
    "Puma" : "美洲狮",
    "Leopard" : "美洲豹",
    "Lion" : "狮子",
    "Wild cat" : "野猫",
    "Cheetah" : "猎豹",
    "Seashore" : "海岸",
    "Beach" : "海滩",
    "Water" : "水",
    "Lakeside" : "湖边",
    "Flower" : "花",
    "Plant" : "植物",
    "Window" : "窗户",
    "Architecture" : "建筑风格",
    "Stairs" : "楼梯",
    "Building" : "建筑",
    "Field" : "田地",
    "Farm" : "农场",
    "Landscape" : "风景",
    "Portrait" : "肖像",
    "People" : "人物",
    "Fashion" : "时尚",
    "Ship" : "船",
    "Vehicle" : "交通工具",
    "Grasshopper" : "蚱蜢",
    "Insect" : "昆虫",
    "Fish" : "鱼",
    "Shark" : "鲨鱼",
    "Chicken" : "鸡",
    "Bird" : "鸟",
    "Ostrich" : "鸵鸟",
    "Owl" : "猫头鹰",
    "Salamander" : "火蜥蜴",
    "Frog" : "蛙",
    "Turtle" : "龟",
    "Reptile" : "爬行动物",
    "Lizard" : "蜥蜴",
    "Chameleon" : "变色龙",
    "Crocodile" : "鳄鱼",
    "Alligator" : "短吻鳄",
    "Scorpion" : "蝎子",
    "Spider" : "蜘蛛",
    "Duck" : "鸭",
    "Worm" : "蠕虫",
    "Shell" : "贝壳",
    "Snail" : "蜗牛",
    "Crab" : "蟹",
    "Lobster" : "龙虾",
    "Cooking" : "烹饪",
    "Penguin" : "企鹅",
    "Whale" : "鲸",
    "Dog" : "狗",
    "Wolf" : "狼",
    "Fox" : "狐狸",
    "Bear" : "熊",
    "Beetle" : "甲虫",
    "Butterfly" : "蝴蝶",
    "Rabbit" : "兔子",
    "Hippo" : "河马",
    "Cow" : "奶牛",
    "Music" : "音乐",
    "Office" : "办公套件",
    "Food" : "食物",
    "Train" : "火车",
    "Car" : "车",
    "Computer" : "计算机",
    "Clock" : "时钟",
    "Screen" : "屏幕",
    "Library" : "图书馆",
    "Display" : "展示",
    "Bike" : "自行车",
    "Camping" : "正在露营",
    "Camera" : "相机",
    "Barbecue" : "烧烤",
    "Theater" : "剧院",
    "Pizza" : "披萨",
    "Info" : "信息",
    "Document" : "文档",
    "Bucket" : "Bucket",
    "Festival" : "节日",
    "Gas station" : "加油站",
    "Parking" : "停车场",
    "Sign" : "签名",
    "Gallery" : "相册",
    "Park" : "公园"
},
"nplurals=1; plural=0;");
