const blogs = [
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  },
  {
    image:
      "https://www.electric.ai/wp-content/uploads/BLOG-The-Top-IT-Blogs-You-Need-To-Know.png",
    title: "Top IT Blogs You Need To Know",
    author: "Electric AI Team",
    date: "12/08/2025",
    summary:
      "Khám phá những blog công nghệ thông tin hàng đầu bạn nên theo dõi để cập nhật kiến thức và xu hướng mới nhất.",
    readTime: "5 phút"
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    title: "ReactJS Tutorial for Beginners",
    author: "Jane Doe",
    date: "10/08/2025",
    summary: "Hướng dẫn chi tiết ReactJS dành cho người mới bắt đầu.",
    readTime: "7 phút"
  },
  {
    image:
      "https://embed.filekitcdn.com/e/2dCejp6yj6tBWKNzNYcedy/qvtsY3gnReoLC8RnNdm4Yu",
    title: "Understanding JavaScript Promises",
    author: "John Smith",
    date: "11/08/2025",
    summary:
      "Tìm hiểu cách hoạt động của Promise trong JavaScript và cách xử lý bất đồng bộ.",
    readTime: "6 phút"
  },
  // Thêm nhiều blog hơn
  {
    image:
      "https://www.solulab.com/wp-content/uploads/2024/01/Top-Artificial-Intelligence-Trends.jpg",
    title: "Latest Trends in AI Technology",
    author: "Tech World",
    date: "14/08/2025",
    summary:
      "Cập nhật những xu hướng mới nhất trong công nghệ trí tuệ nhân tạo và ứng dụng thực tế.",
    readTime: "8 phút"
  },
  {
    image:
      "https://external-preview.redd.it/javascript-es2025-new-features-complete-guide-v0-2p1mDZHckFkLL0vLwcYU-jzOh88zYHR5VjNGcXVKEsA.jpg?auto=webp&s=6c38a0bacfd07bcff75575c4dc88d7ffd760fa44",
    title: "JavaScript ES2025 Features",
    author: "Code Master",
    date: "13/08/2025",
    summary:
      "Tổng hợp các tính năng mới được giới thiệu trong phiên bản JavaScript ES2025.",
    readTime: "6 phút"
  },
  {
    image:
      "https://www.projectcubicle.com/wp-content/uploads/2021/10/How-to-Launch-a-Successful-Business-in-5-Steps-min-672x867.png",
    title: "How to Build a Successful Startup",
    author: "Startup Guru",
    date: "15/08/2025",
    summary:
      "Những bước quan trọng giúp bạn xây dựng và phát triển một startup thành công từ con số 0.",
    readTime: "10 phút"
  }
];

export default blogs;
