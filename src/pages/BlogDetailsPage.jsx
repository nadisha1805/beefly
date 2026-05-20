import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogData = {
  1: {
    title: 'iReaShare Android Manager: Transfer, Back Up, and Manage Android Data with Ease',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    category: 'Android Tools',
    date: 'February 12, 2026',
    readTime: '8 min read',
    content: `
Managing Android data manually can often become frustrating, especially when transferring files between devices or creating secure backups. iReaShare Android Manager provides a streamlined solution that allows users to manage photos, videos, contacts, SMS, music, and documents directly from a computer.

The software supports one-click backup and restore functionality, making it easier for users to secure important files without complicated setup processes. It also allows selective backups, helping users save only the files they truly need.

Another major advantage is file management. Users can preview photos, manage contacts, organize media files, and even send or receive SMS directly from their desktop interface. This makes it a practical choice for professionals and everyday Android users alike.

The tool is compatible with major Android brands including Samsung, Xiaomi, Motorola, OPPO, Vivo, and more. Its clean interface and stable performance make it suitable for beginners as well as advanced users.

Overall, iReaShare Android Manager is a reliable Android management utility for users who want efficient data transfer, secure backups, and better organization of their mobile content.
    `,
  },

  2: {
    title: 'PC Data Recovery: Recover Lost Files from PC and SD Card',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    category: 'PC Tools',
    date: 'February 13, 2026',
    readTime: '10 min read',
    content: `
Accidentally deleting important files can be stressful, especially when business documents, personal photos, or project data are involved. Modern data recovery solutions provide a practical way to recover lost information from hard drives, SSDs, USB drives, and SD cards.

PC Data Recovery tools use advanced scanning technology to detect deleted or corrupted files that may still exist on storage devices. Deep scan functionality can recover content even after formatting or partition issues in many situations.

Most professional recovery software supports recovery for images, videos, audio files, documents, archives, and emails. This makes it suitable for students, office users, content creators, and businesses.

A major benefit of modern recovery applications is the preview feature. Users can verify files before restoring them, improving efficiency and reducing unnecessary recovery attempts.

In addition to recovery, many tools now offer drive health monitoring and partition repair features to improve overall storage reliability.

Choosing the right recovery software can save time, reduce stress, and prevent permanent data loss. Reliable recovery tools are now considered essential utilities for modern computer users.
    `,
  },

  3: {
    title: 'iReaShare Android Data Eraser: Permanently Erase Everything on Android Devices',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    category: 'Android Security',
    date: 'February 14, 2026',
    readTime: '7 min read',
    content: `
When selling, donating, or recycling an Android smartphone, simply deleting files is often not enough. Sensitive data can sometimes still be recovered using specialized recovery tools. Android Data Eraser software provides a more secure solution by permanently removing all information from the device.

Professional erasing utilities overwrite device storage multiple times to ensure data becomes unrecoverable. This includes photos, messages, contacts, app data, browsing history, and account information.

Such tools are especially valuable for businesses handling confidential information, as well as individuals concerned about privacy and identity protection.

Most secure erasing solutions support factory reset protection removal and provide different erasing levels depending on the required security standard.

Another benefit is compatibility across a wide range of Android devices and versions. Modern tools are designed to work with Samsung, Xiaomi, Huawei, OPPO, Vivo, and other major brands.

For users prioritizing privacy and secure data disposal, Android Data Eraser solutions offer an effective and professional approach.
    `,
  },

  4: {
    title: 'Best Cloud Storage Solutions for Personal and Business Use',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    category: 'Cloud Storage',
    date: 'February 15, 2026',
    readTime: '9 min read',
    content: `
Cloud storage has become an essential part of both personal and professional workflows. It allows users to securely store files online while accessing them from multiple devices anywhere in the world.

Modern cloud platforms provide features such as automatic backups, file synchronization, collaboration tools, and advanced encryption for improved security. Businesses often use cloud storage to improve teamwork and simplify remote work environments.

Leading providers now offer scalable storage solutions suitable for students, freelancers, enterprises, and content creators. Integration with productivity tools further improves workflow efficiency.

Security remains one of the biggest priorities for cloud storage providers. Features like two-factor authentication, encrypted transfers, and ransomware protection help users safeguard valuable data.

Whether used for sharing documents, storing media, or managing business operations, cloud storage continues to play a major role in modern digital infrastructure.
    `,
  },

  5: {
    title: 'How VPS Hosting Improves Website Performance and Security',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    category: 'Web Hosting',
    date: 'February 16, 2026',
    readTime: '8 min read',
    content: `
Virtual Private Server (VPS) hosting is a popular solution for websites that require better performance, security, and scalability compared to shared hosting environments.

With VPS hosting, resources such as CPU, RAM, and storage are allocated specifically to each user. This improves website speed and stability, especially during traffic spikes.

Security is another major advantage. Since users operate within isolated environments, risks from neighboring websites are significantly reduced. Many VPS providers also offer firewall protection, automated backups, and DDoS mitigation.

Developers and businesses prefer VPS hosting because it provides greater control over server configurations. Root access allows users to install custom software and optimize server performance based on project requirements.

As websites continue to grow in complexity and traffic demands, VPS hosting remains one of the most balanced solutions between affordability and performance.
    `,
  },

  6: {
    title: 'Top Cybersecurity Practices Every Internet User Should Follow',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    category: 'Cyber Security',
    date: 'February 17, 2026',
    readTime: '11 min read',
    content: `
Cybersecurity threats continue to evolve rapidly, making digital safety more important than ever for both individuals and businesses.

One of the most effective practices is using strong and unique passwords for every account. Password managers can help users maintain security without memorizing multiple credentials.

Two-factor authentication adds another layer of protection by requiring additional verification beyond passwords. This significantly reduces unauthorized access risks.

Users should also keep operating systems, browsers, and applications updated regularly to patch known security vulnerabilities.

Phishing attacks remain one of the most common online threats. Users should avoid clicking suspicious links or downloading unknown attachments from emails and messages.

Public Wi-Fi networks can also expose sensitive information if used without protection. Using a trusted VPN service helps encrypt internet traffic and improves privacy.

By following essential cybersecurity practices consistently, users can greatly reduce the risk of data theft, malware infections, and online fraud.
    `,
  },
};

const BlogDetailsPage = () => {
  const { id } = useParams();

  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <Link
          to="/blog"
          className="text-gray-500 hover:text-green-600 text-lg"
        >
          ← Back to Blog
        </Link>

        <div className="text-center mt-12">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            {blog.category}
          </span>

          <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight mt-8">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-gray-500 mt-8 text-lg">
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-3xl mt-14"
        />

        <div className="mt-14 text-gray-700 leading-9 text-[21px] whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;