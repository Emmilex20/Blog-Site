import React from 'react'
import { formatDate } from '../../../utils/formatDate'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

// Helper function to group blogs by date and count the number of posts for each day
const formatData = (blogs) => {
    const postCountByDate = blogs.reduce((acc, blog) => {
        const date = formatDate(blog.createdAt);
        if (!acc[date]) {
            acc[date] = { name: date, postCount: 0, pv: 0, amt: 0 };
        }
        acc[date].postCount += 1; // Count posts per date
        acc[date].pv += blog.pageViews || 0; // Sum page views
        acc[date].amt += blog.amt || 0; // Sum amount (if available)
        return acc;
    }, {});

    return Object.values(postCountByDate); // Convert object to array
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Pie chart colors

const BlogsChart = ({ blogs }) => {
    const data = formatData(blogs);

    // Debug: Log formatted data
    console.log('Formatted data:', data);

    return (
        <div className='p-6 bg-bgPrimary rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Blogs Chart</h2>

            {/* Container for both charts */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Area chart */}
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="postCount" stroke="#8884d8" fill='#8884d8' />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie chart */}
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="postCount"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default BlogsChart;
