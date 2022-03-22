'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const img = [
      `https://dogily.vn/wp-content/uploads/2021/12/hat-equilibrio-cho-cho-truong-thanh-1.jpg`,
      `https://dogily.vn/wp-content/uploads/2021/12/dog-mania-cho-cho-truong-thanh-3-kg-1-250x300.jpg`,
      `https://dogily.vn/wp-content/uploads/2021/12/nature-kitchen-xuong-khop-cho-cho-2-kg-4-510x510.jpg`,
      `https://dogily.vn/wp-content/uploads/2020/02/day_dat_yem_police_25mm-510x510.jpg`,
      `https://dogily.vn/wp-content/uploads/2021/12/msg-684918299-905-510x510.jpg`,
    ]
    //let random = Math.floor((Math.random()*5))
    return queryInterface.bulkInsert('Products', [{
      name: 'Equilibrio',
      type_id: 1,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 1,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 1,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 1,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 1,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 2,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 2,
      price: 280000,
      desc: `Hạt Dog Mania Cho Mèo Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 2,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 2,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 2,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 3,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 3,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 3,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 3,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 3,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 4,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
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
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
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
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
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
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
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
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 5,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 5,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 5,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 5,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 5,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Equilibrio',
      type_id: 6,
      price: 298000,
      desc: `Các sản phẩm của EQUILIBRIO được sản xuất tại Brazil và tuân thủ theo những quy trình nghiêm ngặt nhất, đảm bảo không sử dụng nguyên liệu biến đổi gen nhờ quá trình lựa chọn hết sức chặt chẽ. Bạn có thể yên tâm rằng thú cưng của mình đang được thưởng thức loại thức ăn an toàn nhất
      Giảm mùi phân nhờ hoạt động của Yucca (cây ngọc giá)
      Hệ tiêu hóa hoạt động khỏe mạnh nhờ hoạt động của men vi sinh (Probiotic) và Inulin (Prebiotic)
      Lông bóng mượt nhờ sự cân bằng hoản hảo của Omega 3 và 6`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dog Mania',
      type_id: 6,
      price: 280000,
      desc: `Hạt Dog Mania Cho Chó Trưởng Thành là sản phẩm thức ăn dành cho chó là một trong những sản phẩm được ưa chuộng hàng đầu tại Việt Nam hiện nay. Hạt Dog Mania cho chó sản xuất trên dây chuyền công nghệ hiện đại, phù hợp với các giống chó trưởng thành.
      Giúp giảm thiểu mùi hôi của phân.
      Giàu vitamin chống oxy hóa.
      Kích thích vị giác, tốt cho lông và da.
      Duy trì sức khỏe đường ruôt, hệ miễn dịch.
      Giúp hình thành cơ bắp chắc khỏe, giúp cho sự phát triển rắn chắc hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Nature's Kitchen`,
      type_id: 6,
      price: 360000,
      desc: `Nature’s Kitchen được sản xuất trên dây chuyền công nghệ hiện đại. Với những nguyên liệu chất lượng cao, cân bằng và đa dạng, giúp hỗ trợ vật nuôi phát triển toàn diện, khỏe mạnh.
      Giúp kiểm soát cân nặng.
      Tăng cường sức khỏe xương khớp, tăng độ đàn hồi cho xương.
      Giúp đốt cháy chất béo, kiểm soát cân nặng. Từ đó giảm gánh nặng xương khớp cho thú cưng.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Dây thắt yếm Police 6cm`,
      type_id: 6,
      price: 30000,
      desc: `Dây dắt Yếm Police 25mm dành cho chó mèo có kiểu dáng và màu sắc đẹp. Thu hút sự chú ý thú cưng nhà bạn. Được làm từ chất liệu bền và chắc chắn.
      + Dây dắt còn có tác dụng giúp bạn giữ chặt và theo sát bé thú cưng của mình.
      + Bộ dây dắt & yếm còn là điểm nhấn nổi bật để thú cưng của bạn trông thật “sành điệu” trong mọi chuyến đi dạo hoặc chạy bộ đầy hứng khởi.
      + Với phần thiết kế dạng yếm ôm sát cực kỳ chắc chắn. Dây dắt được xem là “người phụ tá” đắc lực và lý tưởng giúp bạn dễ dàng “quản lý” các bé hiếu động và tinh nghịch.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
      color: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Áo đánh đàn cho chó mèo`,
      type_id: 6,
      price: 70000,
      desc: `Áo đánh đàn là sản phẩm áo được thiết kế dành riêng cho chó mèo. Với thiết kế thoải mái, ấm áp dễ mặc, nhiều size khác nhau để phù hợp với nhiều giống chó, mèo ở các độ tuổi, cân nặng. Áo đánh đàn không chỉ là sản phẩm giữ ấm hoàn hảo cho thú cưng trong mùa đông. Mà còn giúp cún mèo cưng của bạn trở nên đáng yêu hơn.`,
      quantity: 100,
      img: img[Math.floor((Math.random()*5))],
      provider: 'Công Ty TNHH Trung Nhân',
      import_id: 1,
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
