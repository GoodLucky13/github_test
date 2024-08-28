function login() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('services-container').style.display = 'block';
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'パスワードが間違っています。';
    }
}

function showServiceDetails(serviceName) {
    const serviceDetails = {
        'EC2': 'Amazon EC2（Elastic Compute Cloud）は、スケーラブルなコンピューティング容量を提供するウェブサービスです。',
        'S3': 'Amazon S3（Simple Storage Service）は、スケーラブルなストレージサービスです。'
        // 他のサービスの詳細も追加可能
    };
    document.getElementById('services-container').style.display = 'none';
    document.getElementById('details-container').style.display = 'block';
    document.getElementById('service-details').textContent = serviceDetails[serviceName];
}

function goBack() {
    document.getElementById('details-container').style.display = 'none';
    document.getElementById('services-container').style.display = 'block';
}
