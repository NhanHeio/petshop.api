'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const img = [
      '07957680_e27af46d5d6245d49dbeb3f3f47c4399_27c46ef836d5463c89d7ff903d6593c5_master.jpg',
      'c20c528fcc11b851a97db6d4b6d2b87e.jpg',
      'chuot-do-choi-cho-meo-6.jpg',
      'day_dat_yem_police_25mm-510x510.jpg',
      'do-choi-cho-meo-paw-happy-pet-circle.jpg',
      'dog-mania-cho-cho-truong-thanh-3-kg-1-250x300.jpg',
      'hat-equilibrio-cho-cho-truong-thanh-1.jpg',
      'msg-684918299-905-510x510.jpg',
      'nature-kitchen-xuong-khop-cho-cho-2-kg-4-510x510.jpg',
      'qq800384-1581663348.jpg',
      'thuc-an-cho-meo-con-vi-ca-bien-va-sua-whiskas-ocean-fish-with-milk-1-1-kg.jpg',
      'thuc-an-cho-meo-minino-yum-3-min.jpg'
    ]
    //let random = Math.floor((Math.random()*12))
    return queryInterface.bulkInsert('Products', [{
      name: 'Equilibrio',
      type_id: 4,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 4,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 4,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 4,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 4,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 24,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 24,
      price: 280000,
      desc: `Hạt Dog Mania Cho Mèo Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 24,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 24,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 24,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 34,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 34,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 34,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 34,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 34,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 44,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 44,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 44,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 44,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 44,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 44,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 44,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 44,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 44,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 54,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 54,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 54,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 54,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 54,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 64,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 64,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 64,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 64,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 64,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*12))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 4,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
